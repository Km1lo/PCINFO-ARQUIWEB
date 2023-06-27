import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reporte } from '../model/reporte';
import { Subject,Observable } from 'rxjs';
import { reporteUsuarioDTO } from '../model/reporteUsuarioDTO';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private url=`${base_url}/reporte`
  constructor(private http:HttpClient) { }
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Reporte[]>()

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Reporte[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Reporte>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(rep: Reporte){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, rep, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
    }
  insert(reporte : Reporte){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, reporte, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
 getConfirmDelete(){
  return this.confirmarEliminacion.asObservable();
}
setConfirmDelete(estado:Boolean){
  this.confirmarEliminacion.next(estado);
}
delete(id: number) {
  let token = sessionStorage.getItem("token");
  return this.http.delete(`${this.url}/${id}`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
setList(listaNueva: Reporte[]) {
  this.listaCambio.next(listaNueva);
}
getList()
{
  return this.listaCambio.asObservable();
}


getReporteCountByUsuario(): Observable<reporteUsuarioDTO[]> {
  let token = sessionStorage.getItem("token");
  return this.http.get<reporteUsuarioDTO[]>(`${this.url}/reporte-count`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
getReporteByEstado(): Observable<reporteUsuarioDTO[]> {
  let token = sessionStorage.getItem("token");
  return this.http.get<reporteUsuarioDTO[]>(`${this.url}/reporte-count2`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}

getReporte1ByEstado(): Observable<reporteUsuarioDTO[]> {
  let token = sessionStorage.getItem("token");
  return this.http.get<reporteUsuarioDTO[]>(`${this.url}/reporte-estado`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}



}

