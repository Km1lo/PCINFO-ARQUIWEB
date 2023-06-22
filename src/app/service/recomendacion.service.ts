import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recomendacion } from '../model/recomendacion';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {
  private url=`${base_url}/recomendacion`

  constructor(private http:HttpClient) { }
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Recomendacion[]>()
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Recomendacion[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Recomendacion>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(rep: Recomendacion){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, rep, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
    }
  insert(recomendacion : Recomendacion){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,recomendacion, {
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
setList(listaNueva: Recomendacion[]) {
  this.listaCambio.next(listaNueva);
}
getList()
{
  return this.listaCambio.asObservable();
}
}