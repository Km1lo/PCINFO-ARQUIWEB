import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Administrador } from '../model/administrador';
import { Subject } from 'rxjs';



const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private url=`${base_url}/administrador`
  constructor(private http:HttpClient) { }
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Administrador[]>()
  list(){
    return this.http.get<Administrador[]>(this.url);
  }

  listId(id:number){
    return this.http.get<Administrador>(`${this.url}/${id}`);
  }
  update(admin: Administrador){
    return this.http.put(this.url, admin);
   }
  insert(administrador : Administrador){
    return this.http.post(this.url, administrador);
  }
  getConfirmDelete(){
  return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
  this.confirmarEliminacion.next(estado);
  }
  delete(id: number) {
  return this.http.delete(`${this.url}/${id}`)
  }
  setList(listaNueva: Administrador[]) {
  this.listaCambio.next(listaNueva);
  }
  getList()
{
  return this.listaCambio.asObservable();
}
}

