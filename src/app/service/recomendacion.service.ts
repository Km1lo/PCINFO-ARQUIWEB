import { HttpClient } from '@angular/common/http';
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
  list()
  {
    return this.http.get<Recomendacion[]>(this.url);
  }
  listId(id:number){
    return this.http.get<Recomendacion>(`${this.url}/${id}`);
  }
  update(rep: Recomendacion){
    return this.http.put(this.url+"/"+rep.id, rep);
  }
  insert(recomendacion : Recomendacion){
    return this.http.post(this.url,recomendacion);
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
setList(listaNueva: Recomendacion[]) {
  this.listaCambio.next(listaNueva);
}

}
