import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cuestionario } from 'src/app/model/cuestionario';
import * as moment from 'moment';
import { CuestionarioService } from 'src/app/service/cuestionario.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(
    private CuestionarioService: CuestionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      tipo_form: new FormControl(),
      Uso_de_PC: new FormControl(),
      Presupuesto: new FormControl(),
      Tamano_del_PC:new FormControl(),
      Diseno:new FormControl(),
      Tipo_de_refrigeracion:new FormControl(),
      Overclocking:new FormControl(),
      Marca_Procesador:new FormControl(),
      Programas_used:new FormControl()
  })
}

  init() {
    if (this.edicion) {
      this.CuestionarioService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          tipo_form: new FormControl(data.tipo_form),
          Uso_de_PC: new FormControl(data.Uso_de_PC),
          Presupuesto: new FormControl(data.Presupuesto),
          Tamano_del_PC:new FormControl(data.Tamano_del_PC),
          Diseno:new FormControl(data.Diseno),
          Tipo_de_refrigeracion:new FormControl(data.Tipo_de_refrigeracion),
          Overclocking:new FormControl(data.Overclocking),
          Marca_Procesador:new FormControl(data.Marca_Procesador),
          Programas_used:new FormControl(data.Programas_used)
        });
      });
    }
  }

  aceptar(): void {
    this.cuestionario.id = this.form.value['id'];
    this.cuestionario.tipo_form = this.form.value['tipo_form'];
    this.cuestionario.Uso_de_PC = this.form.value['Uso_de_PC'];
    this.cuestionario.Presupuesto = this.form.value['Presupuesto'];
    this.cuestionario.Tamano_del_PC = this.form.value['Tamano_del_PC'];
    this.cuestionario.Diseno = this.form.value['Diseno'];
    this.cuestionario.Tipo_de_refrigeracion = this.form.value['Tipo_de_refrigeracion'];
    this.cuestionario.Overclocking = this.form.value['Overclocking'];
    this.cuestionario.Marca_Procesador = this.form.value['Marca_Procesador'];
    this.cuestionario.Programas_used = this.form.value['Programas_used'];

    if (
      this.form.value['tipo_form'].length > 0 &&
      this.form.value['Uso_de_PC'].length > 0
    ) {
      if (this.edicion) {
        //registrarlo en la base de  datos
        this.CuestionarioService.update(this.cuestionario).subscribe((data) =>
          this.router.navigate(['administradores/mostrar']).then(() => {
            window.location.reload();
          })
        );
      } else {
        //registrarlo en la base de  datos
        this.CuestionarioService.insert(this.cuestionario).subscribe((data) =>
          this.router.navigate(['administradores/mostrar']).then(() => {
            window.location.reload();
          })
        );
      }
    } else {
      this.mensaje = 'Ingrese la descripcion o estado';
    }
  }
}
