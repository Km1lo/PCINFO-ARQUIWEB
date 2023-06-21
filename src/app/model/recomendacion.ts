import { Cuestionario } from "./cuestionario"

export class Recomendacion{
  id:number=0
  valoracion_user:number=0
  notas_adicionales:string=""
  cuestionario:Cuestionario=new Cuestionario()

}
