import { Injectable } from '@angular/core';
import { Paciente } from '../_model/paciente';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; 

//SUBJECTS: OBSERVADORES QUE ESCUCHAN Y ESTÁN ATENTOS A LOS CAMBIOS DE LAS PROPIEDADES A LOS CUALES LOS AÑADO

@Injectable({
  providedIn: 'root'
})

export class PacienteService {

  pacienteCambio = new Subject<Paciente[]>();
  mensajeCambio =  new Subject<string>();

  url: string = `${environment.HOST}/pacientes`;

  constructor(private http: HttpClient ) { }

  listar(){
    return this.http.get<Paciente[]>(this.url);
  }

  listarPorId(idPaciente: number){
    return this.http.get<Paciente>(`${this.url}/${idPaciente}`);
  }

  registrar(paciente: Paciente){
    return this.http.post(this.url, paciente);
  }

  modificar(paciente: Paciente) {
    return this.http.put(this.url, paciente);
  }

  eliminar(idPaciente:number){
      return this.http.delete(`${this.url}/${idPaciente}`);
  }
}
