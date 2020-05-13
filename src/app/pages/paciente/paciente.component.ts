import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente } from '../../_model/paciente';
import { PacienteService } from '../../_service/paciente.service';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  displayedColumns = ['idPaciente', 'nombres', 'apellidos', 'acciones'];
  dataSource: MatTableDataSource<Paciente>;
  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private pacienteService: PacienteService, private snack: MatSnackBar) { }

  ngOnInit() {

    this.pacienteService.pacienteCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.pacienteService.mensajeCambio.subscribe(data => {
      this.snack.open(data, 'AVISO', {
        duration: 2000
      });
    });

    this.pacienteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(idPaciente: number) {
    this.pacienteService.eliminar(idPaciente).subscribe(() => {
      this.pacienteService.listar().subscribe(data => {
        this.pacienteService.pacienteCambio.next(data);
        this.pacienteService.mensajeCambio.next('SE ELIMINÓ');
      });
    });
  }
}
