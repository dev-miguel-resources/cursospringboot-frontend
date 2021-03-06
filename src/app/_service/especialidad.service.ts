import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Especialidad } from '../_model/especialidad';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  EspecialidadCambio = new Subject<Especialidad[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/especialidades`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Especialidad[]>(this.url);
  }

  listarPorId(idEspecialidad: number){
    return this.http.get<Especialidad>(`${this.url}/${idEspecialidad}`);
  }

  registrar(especialidad: Especialidad){
    return this.http.post(this.url, especialidad);
  }

  modificar(especialidad: Especialidad) {
    return this.http.put(this.url, especialidad);
  }

  eliminar(idEspecialidad:number){
      return this.http.delete(`${this.url}/${idEspecialidad}`);
  }
}
