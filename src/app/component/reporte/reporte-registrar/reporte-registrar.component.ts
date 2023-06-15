import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Reporte } from 'src/app/model/reporte';
import * as moment from 'moment';
import { ReporteService } from 'src/app/service/reporte.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Administrador } from 'src/app/model/administrador';

@Component({
  selector: 'app-reporte-registrar',
  templateUrl: './reporte-registrar.component.html',
  styleUrls: ['./reporte-registrar.component.css']
})
export class ReporteRegistrarComponent implements OnInit{


    form: FormGroup = new FormGroup({});
    reporte: Reporte = new Reporte();
    mensaje: string = "";
    maxFecha: Date = moment().add(1, 'days').toDate();
    id: number = 0;
    edicion: boolean = false; //no es edicion
    lista: Administrador[] = [];
  idAdministradorSeleccionado: number = 0;
    constructor(
      private ReporteService: ReporteService,
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
        fecha: new FormControl(),
        hora: new FormControl(),
        descripcion: new FormControl(),
        estado:new FormControl(),
        administrador :new FormControl()
    })
  }

    init() {
      if (this.edicion) {
        this.ReporteService.listId(this.id).subscribe((data) => {
          this.form = new FormGroup({
            id: new FormControl(data.id),
            fecha: new FormControl(data.fecha),
            descripcion: new FormControl(data.descripcion),
            estado:new FormControl(data.estado),
            administrador :new FormControl(data.administrador)
          });
        });
      }
    }

    aceptar(): void {
      this.reporte.id = this.form.value['id'];
      this.reporte.fecha = this.form.value['fecha'];
      this.reporte.descripcion = this.form.value['descripcion'];
      this.reporte.estado = this.form.value['estado'];
      this.reporte.administrador.area_trabajo=this.form.value['administrador.area_trabajo'];

      if (this.idAdministradorSeleccionado>0) {
        let a = new Administrador();
        a.id = this.idAdministradorSeleccionado;
        this.reporte.administrador=a;
        this.ReporteService.insert(this.reporte).subscribe(() => {
        this.ReporteService.list().subscribe(data => {
              this.ReporteService.setList(data);
            })

          })
          this.router.navigate(['administradores/mostrar/recomendacion']);
    }
      if (
        this.form.value['descripcion'].length > 0 &&
        this.form.value['estado'].length > 0 && this.form.value['fecha'] instanceof Date
      ) {
        if (this.edicion) {
          //registrarlo en la base de  datos
          this.ReporteService.update(this.reporte).subscribe((data) =>
          this.ReporteService.list().subscribe(data=>{
            this.ReporteService.setList(data);
          })
          );
        } else {
          //registrarlo en la base de  datos
          this.ReporteService.insert(this.reporte).subscribe((data) =>
          this.ReporteService.list().subscribe(data=>{
            this.ReporteService.setList(data);
          })
          );
        }

        this.router.navigate(['administradores/mostrar/reporte']);

      } else {
        this.mensaje = 'Ingrese la descripcion o estado';


    }
  }

}
