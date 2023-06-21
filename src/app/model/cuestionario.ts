import { Usuario } from "./usuario"

export class Cuestionario{
  id: number=0
  tipo_form: string=""
  uso_de_pc: string=""
  presupuesto: string=""
  tamano_del_pc: string=""
  diseno: string=""
  tipo_de_refrigeracion: string=""
  overclocking: string=""
  marca_procesador: string=""
  programas_used: string=""
  usuario:Usuario=new Usuario()
}
