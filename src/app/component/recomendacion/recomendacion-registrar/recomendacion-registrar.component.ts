import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recomendacion } from 'src/app/model/recomendacion';
import * as moment from 'moment';
import { RecomendacionService } from 'src/app/service/recomendacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Cuestionario } from 'src/app/model/cuestionario';
import { CuestionarioService } from 'src/app/service/cuestionario.service';


@Component({
  selector: 'app-recomendacion-registrar',
  templateUrl: './recomendacion-registrar.component.html',
  styleUrls: ['./recomendacion-registrar.component.css']
})
export class RecomendacionRegistrarComponent  implements OnInit {
  form:FormGroup= new FormGroup({});
  recomendacion:Recomendacion= new Recomendacion();
  mensaje:string="";
  maxFecha: Date=moment().add(1,'days').toDate();
  id:number=0;
  edicion:boolean=false;
  lista: Cuestionario[] = [];
  idCuestionarioSeleccionado:number =0;

  constructor(
    private RecomendacionService:RecomendacionService,
    private router:Router,
    private route:ActivatedRoute, private cS: CuestionarioService)
  {

  }
  ngOnInit(): void {
    this.cS.list().subscribe(data => { this.lista = data; });

    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      console.log('edicion', this.edicion, 'id', this.id)
      this.init();
    });
    this.form=new FormGroup({
      id:new FormControl(),
      valoracion_user:new FormControl(),
      notas_adicionales:new FormControl(),
      cuestionario :new FormControl()
    })
}
  init() {
    if (this.edicion) {
      this.RecomendacionService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          valoracion_user: new FormControl(data.valoracion_user),
          notas_adicionales: new FormControl(data.notas_adicionales),
          cuestionario :new FormControl(data.cuestionario)
        });
      });
    }
  }
  aceptar(): void {
    this.recomendacion.id = this.form.value['id'];
    this.recomendacion.valoracion_user = this.form.value['valoracion_user'];
    this.recomendacion.notas_adicionales = this.form.value['notas_adicionales'];
    this.recomendacion.cuestionario.tipo_form=this.form.value['cuestionario.tipo_form'];
    if (this.idCuestionarioSeleccionado>0) {
      let a = new Cuestionario();
      a.id = this.idCuestionarioSeleccionado;
      this.recomendacion.cuestionario=a;
      this.RecomendacionService.insert(this.recomendacion).subscribe(() => {
      this.RecomendacionService.list().subscribe(data => {
            this.RecomendacionService.setList(data);
          })
        })
        this.router.navigate(['administradores/mostrar/recomendacion']);
  }

    if (
      this.form.value['notas_adicionales'].length > 0
    ) {
      if(this.edicion){
        this.RecomendacionService.update(this.recomendacion).subscribe((data) =>
          this.RecomendacionService.list().subscribe(data=>{
            this.RecomendacionService.setList(data);
          })
        );
      }else {
        //registrarlo en la base de  datos
        this.RecomendacionService.insert(this.recomendacion).subscribe((data) =>
        this.RecomendacionService.list().subscribe(data=>{
          this.RecomendacionService.setList(data);
        })
        );
      }
      this.router.navigate(['administradores/mostrar/recomendacion']);
    }
     else {
      this.mensaje = 'Ingrese la descripcion o estado';
    }
  }



}
