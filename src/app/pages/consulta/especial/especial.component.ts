import { Component, OnInit } from '@angular/core';
import { ConsultaListaExamenDTO } from '../../../_dto/consultaListaExamenDTO';
import { Consulta } from '../../../_model/consulta';
import { MatSnackBar } from '@angular/material';
import { ConsultaService } from '../../../_service/consulta.service';
import { ExamenService } from '../../../_service/examen.service';
import { MedicoService } from '../../../_service/medico.service';
import { EspecialidadService } from '../../../_service/especialidad.service';
import { PacienteService } from '../../../_service/paciente.service';
import { DetalleConsulta } from '../../../_model/detalleConsulta';
import { Examen } from '../../../_model/examen';
import { Medico } from '../../../_model/medico';
import { Especialidad } from '../../../_model/especialidad';
import { Paciente } from '../../../_model/paciente';
import {FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-especial',
  templateUrl: './especial.component.html',
  styleUrls: ['./especial.component.css']
})
export class EspecialComponent implements OnInit {

  form: FormGroup;

  pacientes: Paciente[] = [];
  especialidades: Especialidad[] = [];
  medicos: Medico[] = [];
  examenes: Examen[] = [];

  detalleConsulta: DetalleConsulta[] = [];
  examenesSeleccionados: Examen[] = [];

  diagnostico: string;
  tratamiento: string;
  mensaje: string;

  myControlPaciente: FormControl = new FormControl();
  myControlMedico: FormControl = new FormControl(); 

  pacientesFiltrados: Observable<any[]>;
  medicosFiltrados: Observable<any[]>;

  constructor(
    private pacienteService: PacienteService,
    private especialidadService: EspecialidadService,
    private medicoService: MedicoService,
    private examenService: ExamenService,
    private consultaService: ConsultaService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

}
