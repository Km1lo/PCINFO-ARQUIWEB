import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cuestionario } from 'src/app/model/cuestionario';
import * as moment from 'moment';
import { CuestionarioService } from 'src/app/service/cuestionario.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-cuestionario-registrar',
  templateUrl: './cuestionario-registrar.component.html',
  styleUrls: ['./cuestionario-registrar.component.css']
})
export class CuestionarioRegistrarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  cuestionario: Cuestionario = new Cuestionario();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false; //no es edicion
  lista: Usuario[] = [];
    idUsuarioSeleccionado: number = 0;
  constructor(
    private CuestionarioService: CuestionarioService,
    private router: Router,
    private route: ActivatedRoute,private uS: UsuarioService)
   {
  }

  ngOnInit(): void {
    this.uS.list().subscribe(data => { this.lista = data; });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      tipo_form: new FormControl(),
      uso_de_pc: new FormControl(),
      presupuesto: new FormControl(),
      tamano_del_pc:new FormControl(),
      diseno:new FormControl(),
      tipo_de_refrigeracion:new FormControl(),
      overclocking:new FormControl(),
      marca_procesador:new FormControl(),
      programas_used:new FormControl(),
      usuario :new FormControl()
  })
}

  init() {
    if (this.edicion) {
      this.CuestionarioService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          tipo_form: new FormControl(data.tipo_form),
          uso_de_pc: new FormControl(data.uso_de_pc),
          presupuesto: new FormControl(data.presupuesto),
          tamano_del_pc:new FormControl(data.tamano_del_pc),
          diseno:new FormControl(data.diseno),
          tipo_de_refrigeracion:new FormControl(data.tipo_de_refrigeracion),
          overclocking:new FormControl(data.overclocking),
          marca_procesador:new FormControl(data.marca_procesador),
          programas_used:new FormControl(data.programas_used),
          usuario :new FormControl()
        });
      });
    }
  }

  aceptar(): void {
    this.cuestionario.id = this.form.value['id'];
    this.cuestionario.tipo_form = this.form.value['tipo_form'];
    this.cuestionario.uso_de_pc = this.form.value['uso_de_pc'];
    this.cuestionario.presupuesto = this.form.value['presupuesto'];
    this.cuestionario.tamano_del_pc = this.form.value['tamano_del_pc'];
    this.cuestionario.diseno = this.form.value['diseno'];
    this.cuestionario.tipo_de_refrigeracion = this.form.value['tipo_de_refrigeracion'];
    this.cuestionario.overclocking = this.form.value['overclocking'];
    this.cuestionario.marca_procesador = this.form.value['marca_procesador'];
    this.cuestionario.programas_used = this.form.value['programas_used'];
    this.cuestionario.usuario.apellidop=this.form.value['usuario.apellidop'];

    if (this.idUsuarioSeleccionado>0) {
      let a = new Usuario();
      a.id = this.idUsuarioSeleccionado;
      this.cuestionario.usuario=a;
      this.CuestionarioService.insert(this.cuestionario).subscribe(() => {
      this.CuestionarioService.list().subscribe(data => {
            this.CuestionarioService.setList(data);
          })
        })
        this.router.navigate(['administradores/mostrar/cuestionarios/listar']);
  }

    if (
      this.form.value['tipo_form'].length >0 &&
      this.form.value['uso_de_pc'].length > 0 &&
      this.form.value['presupuesto'].length > 0 &&
      this.form.value['tamano_del_pc'].length > 0 &&
      this.form.value['diseno'].length > 0 &&
      this.form.value['marca_procesador'].length > 0 &&
      this.form.value['programas_used'].length > 0
    ) {
      if (this.edicion) {
        //registrarlo en la base de  datos
        this.CuestionarioService.update(this.cuestionario).subscribe((data) =>
        this.CuestionarioService.list().subscribe(data=>{
          this.CuestionarioService.setList(data);
        })
        );
      }

      this.router.navigate(['administradores/mostrar/cuestionarios/listar']);

    } else {
      this.mensaje = 'Ingrese la descripcion o estado';
    }
  }
}
