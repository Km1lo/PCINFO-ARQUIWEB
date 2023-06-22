import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../model/cuestionario';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  private url=`${base_url}/cuestionario`

  constructor(private http:HttpClient) { }
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Cuestionario[]>()
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Cuestionario[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Cuestionario>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(rep: Cuestionario){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, rep, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
    }
  insert(cuestionario : Cuestionario){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cuestionario, {
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
setList(listaNueva: Cuestionario[]) {
  this.listaCambio.next(listaNueva);
}
getList()
{
  return this.listaCambio.asObservable();
}
}
