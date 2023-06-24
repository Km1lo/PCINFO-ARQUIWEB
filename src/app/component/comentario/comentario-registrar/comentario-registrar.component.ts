import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Comentario } from 'src/app/model/comentario';
import * as moment from 'moment';
import { ComentarioService } from 'src/app/service/comentario.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-comentario-registrar',
  templateUrl: './comentario-registrar.component.html',
  styleUrls: ['./comentario-registrar.component.css']
})
export class ComentarioRegistrarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  comentarioo: Comentario = new Comentario();
  mensaje: string = "";
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false; //no es edicion

  //PARA FK
  listaUsuario: Usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  //

  constructor(
    private ComentarioService: ComentarioService,
    private router: Router,
    private route: ActivatedRoute, private uS: UsuarioService)
  {}

  ngOnInit(): void {

    this.uS.list().subscribe(data => { this.listaUsuario = data; });



    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      comentario: new FormControl(),
      fecha: new FormControl(),
      usuario: new FormControl()

    })
  }

  init() {
    if (this.edicion) {
      this.ComentarioService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          comentario: new FormControl(data.comentario),
          fecha: new FormControl(data.fecha),
          usuario: new FormControl(data.usuario)
        });
      });
    }
  }



//ERROR AQUI (NO AGARRA EL ID DE LA OTRA TABLA (USUARIO))

aceptar(): void {
  this.comentarioo.id = this.form.value['id'];
  this.comentarioo.comentario = this.form.value['comentario'];
  this.comentarioo.fecha = this.form.value['fecha'];
  this.comentarioo.usuario.nombre = this.form.value['usuario.nombre'];

  if (this.idUsuarioSeleccionado>0) {



    let a = new Usuario();
    a.id = this.idUsuarioSeleccionado;
    this.comentarioo.usuario=a;



    this.ComentarioService.insert(this.comentarioo).subscribe(() => {
    this.ComentarioService.list().subscribe(data => {
          this.ComentarioService.setList(data);
        })
      })
      this.router.navigate(['/pages/comentarios/listar']);
  }



  if(this.form.value['comentario'].length > 0 /*&& this.form.value['fecha'] instanceof Date*/){

    if(this.edicion){
      this.ComentarioService.update(this.comentarioo).subscribe((data) =>
        this.ComentarioService.list().subscribe(data=>{
          this.ComentarioService.setList(data);
        })

      );
    }


    this.router.navigate(['/pages/comentarios/listar']);
  }
  else {
    this.mensaje = "Llene todos los campos";
  }
}

}
