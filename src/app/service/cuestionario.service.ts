import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../model/cuestionario';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Cuestionario[]>(this.url);
  }
  listId(id:number){
    return this.http.get<Cuestionario>(`${this.url}/${id}`);
  }
  update(rep: Cuestionario){
    return this.http.put(this.url+"/"+rep.id, rep);
  }
  insert(cuestionario : Cuestionario){
    return this.http.post(this.url, cuestionario);
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
setList(listaNueva: Cuestionario[]) {
  this.listaCambio.next(listaNueva);
}
}
