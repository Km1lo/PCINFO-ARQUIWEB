import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Comentario } from 'src/app/model/comentario';
import * as moment from 'moment';
import { ComentarioService } from 'src/app/service/comentario.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

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
  constructor(
    private ComentarioService: ComentarioService,
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
      comentario: new FormControl(),
      fecha: new FormControl()

    })
  }

  init() {
    if (this.edicion) {
      this.ComentarioService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          comentario: new FormControl(data.comentario),
          fecha: new FormControl(data.fecha)
        });
      });
    }
  }

  aceptar(): void {
    this.comentarioo.id = this.form.value['id'];
    this.comentarioo.comentario = this.form.value['comentario'];
    this.comentarioo.fecha = this.form.value['fecha'];

    if(this.form.value['comentario'].length > 0 && this.form.value['fecha'] instanceof Date){
      if(this.edicion){
        this.ComentarioService.update(this.comentarioo).subscribe((data) =>
          this.router.navigate(['administradores/mostrar']).then(() => {
            window.location.reload();
          })
        );
      } else {
        this.ComentarioService.insert(this.comentarioo).subscribe((data) =>
          this.router.navigate(['administradores/mostrar']).then(() => {
            window.location.reload();
          })
        );
      }
    }
    else {
      this.mensaje = "Llene todos los campos";
    }
  }

}
