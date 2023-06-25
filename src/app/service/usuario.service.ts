import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Subject,Observable } from 'rxjs';
import { usuarioComentarioDTO } from '../model/usuarioComentarioDTO';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Usuario[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Usuario>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(user: Usuario){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, user, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(usuario : Usuario){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, usuario, {
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
setList(listaNueva: Usuario[]) {
  this.listaCambio.next(listaNueva);
}
getList()
{
  return this.listaCambio.asObservable();
}


getUsuarioComentario(): Observable<usuarioComentarioDTO[]>{
  let token = sessionStorage.getItem("token");
  return this.http.get<usuarioComentarioDTO[]>(`${this.url}/usuario-comentario-count`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}



}
