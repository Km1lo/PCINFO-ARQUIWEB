import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Administrador } from 'src/app/model/administrador';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { AdministradorService } from 'src/app/service/administrador.service';
@Component({
  selector: 'app-administrador-registrar',
  templateUrl: './administrador-registrar.component.html',
  styleUrls: ['./administrador-registrar.component.css']
})
export class AdministradorRegistrarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  administrador: Administrador = new Administrador();
  mensaje: string = "";
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  constructor(
    private AdministradorService: AdministradorService,
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
      profesion: new FormControl(),
      area_trabajo: new FormControl(),
      horario: new FormControl(),
      cumpleanos:new FormControl(),
      estado_vacaciones: new FormControl(),
      estado_contrato:new FormControl()
    })
  }

  init() {
    if (this.edicion) {
      this.AdministradorService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          profesion: new FormControl(data.profesion),
          area_trabajo: new FormControl(data.area_trabajo),
          horario: new FormControl(data.horario),
          cumpleanos:new FormControl(data.cumpleanos),
          estado_vacaciones: new FormControl(data.estado_vacaciones),
          estado_contrato:new FormControl(data.estado_contrato)
        });
      });
    }
  }


  aceptar(): void {
    this.administrador.id = this.form.value['id'];
    this.administrador.profesion = this.form.value['profesion'];
    this.administrador.area_trabajo = this.form.value['area_trabajo'];
    this.administrador.horario = this.form.value['horario'];
    this.administrador.cumpleanos = this.form.value['cumpleanos'];
    this.administrador.estado_vacaciones = this.form.value['estado_vacaciones'];
    this.administrador.estado_contrato = this.form.value['estado_contrato'];
    if (
      this.form.value['area_trabajo'].length > 0 &&
      this.form.value['profesion'].length > 0 && this.form.value['horario'].length > 0 && this.form.value['cumpleanos'] instanceof Date
    ) {
      if (this.edicion) {
        //registrarlo en la base de  datos
        this.AdministradorService.update(this.administrador).subscribe((data) =>
          this.router.navigate(['administradores/mostrar']).then(() => {
            window.location.reload();
          })
        );
      } else {
        //registrarlo en la base de  datos
        this.AdministradorService.insert(this.administrador).subscribe((data) =>
          this.router.navigate(['administradores/mostrar']).then(() => {
            window.location.reload();
          })
        );
      }
    } else {
      this.mensaje = 'Ingrese el area de trabajo o profesion';
    }
  }


}
