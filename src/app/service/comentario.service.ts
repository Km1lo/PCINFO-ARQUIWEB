import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comentario } from '../model/comentario';
import { Subject } from 'rxjs';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url=`${base_url}/comentario`

  constructor(private http:HttpClient) { }
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Comentario[]>()

  list(){
    return this.http.get<Comentario[]>(this.url);
  }
  listId(id:number){
    return this.http.get<Comentario>(`${this.url}/${id}`);
  }
  update(com: Comentario){
    return this.http.put(this.url+"/"+com.id, com);
  }
  insert(comentario : Comentario){
    return this.http.post(this.url, comentario);
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
setList(listaNueva: Comentario[]) {
  this.listaCambio.next(listaNueva);
}
}
