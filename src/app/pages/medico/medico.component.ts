import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicoDialogoComponent } from './medico-dialogo/medico-dialogo.component';
import { Medico } from '../../_model/medico';
import {MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar} from '@angular/material';
import { MedicoService } from '../../_service/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  displayedColumns = ['idMedico', 'nombres', 'apellidos', 'cmp', 'acciones'];
  dataSource: MatTableDataSource<Medico>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private medicoService: MedicoService, private dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit() {


    this.medicoService.listar().subscribe(data => {
      //console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
