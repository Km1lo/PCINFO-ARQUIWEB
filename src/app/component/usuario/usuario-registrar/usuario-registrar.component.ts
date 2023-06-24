import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import * as moment from 'moment';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrls: ['./usuario-registrar.component.css']
})
export class UsuarioRegistrarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  usuarioo: Usuario = new Usuario();
  mensaje: string = "";
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false; //no es edicion
  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute)
  {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      dni: new FormControl(),
      nombre: new FormControl(),
      apellidop: new FormControl(),
      apellidom: new FormControl(),
      correo: new FormControl(),
      sexo: new FormControl(),
      edad: new FormControl(),
      contrasenia: new FormControl(),
      pais: new FormControl()

    })
  }

  init() {
    if (this.edicion) {
      this.UsuarioService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          dni: new FormControl(data.dni),
          nombre: new FormControl(data.nombre),
          apellidop: new FormControl(data.apellidop),
          apellidom: new FormControl(data.apellidom),
          correo: new FormControl(data.correo),
          sexo: new FormControl(data.sexo),
          edad: new FormControl(data.edad),
          contrasenia: new FormControl(data.contrasenia),
          pais: new FormControl(data.pais)
        });
      });
    }
  }




  aceptar(): void {
    this.usuarioo.id = this.form.value['id'];
    this.usuarioo.dni = this.form.value['dni'];
    this.usuarioo.nombre = this.form.value['nombre'];
    this.usuarioo.apellidop = this.form.value['apellidop'];
    this.usuarioo.apellidom = this.form.value['apellidom'];
    this.usuarioo.correo = this.form.value['correo'];
    this.usuarioo.sexo = this.form.value['sexo'];
    this.usuarioo.edad = this.form.value['edad'];
    this.usuarioo.contrasenia = this.form.value['contrasenia'];
    this.usuarioo.pais = this.form.value['pais'];



  if(this.form.value['contrasenia'].length > 0){

    if(this.edicion){
      this.UsuarioService.update(this.usuarioo).subscribe((data) =>{
        this.UsuarioService.list().subscribe(data=>{
          this.UsuarioService.setList(data);
        })
      })
      this.router.navigate(['/pages/usuario/listar']);
    } else {
      this.UsuarioService.insert(this.usuarioo).subscribe((data) =>
        this.UsuarioService.list().subscribe(data=>{
          this.UsuarioService.setList(data);
        })
      );
    }
    this.router.navigate(['/pages/usuario/listar']);
  }
  else {
    this.mensaje = "Llene todos los campos";
  }
}


}
