import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Subject } from 'rxjs';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url=`${base_url}/usuario`
  constructor(private http:HttpClient) { }
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Usuario[]>()

  list(){
    return this.http.get<Usuario[]>(this.url);
  }
  listId(id:number){
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }
  update(com: Usuario){
    //return this.http.put(this.url+"/"+com.id, com);
    return this.http.put(this.url, com);
  }
  insert(usuario : Usuario){
    return this.http.post(this.url, usuario);
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
setList(listaNueva: Usuario[]) {
  this.listaCambio.next(listaNueva);
}
getList()
{
  return this.listaCambio.asObservable();
}
}
