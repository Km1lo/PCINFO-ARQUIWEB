import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Reporte } from 'src/app/model/reporte';
import * as moment from 'moment';
import { ReporteService } from 'src/app/service/reporte.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Administrador } from 'src/app/model/administrador';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

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
    listaUsuario: Usuario[] = [];
    idUsuarioSeleccionado: number = 0;
    constructor(
      private ReporteService: ReporteService,
      private router: Router,
      private route: ActivatedRoute, private uS: UsuarioService)
    {
    }

    ngOnInit(): void {
      this.uS.list().subscribe(data => { this.listaUsuario = data; });

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
        usuario :new FormControl()
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
            usuario :new FormControl(data.usuario)
          });
        });
      }
    }

    aceptar(): void {
      this.reporte.id = this.form.value['id'];
      this.reporte.fecha = this.form.value['fecha'];
      this.reporte.descripcion = this.form.value['descripcion'];
      this.reporte.estado = this.form.value['estado'];
      this.reporte.usuario.nombre=this.form.value['usuario.nombre'];

      if (this.idUsuarioSeleccionado>0) {
        let a = new Usuario();
        a.id = this.idUsuarioSeleccionado;
        this.reporte.usuario=a;
        this.ReporteService.insert(this.reporte).subscribe(() => {
        this.ReporteService.list().subscribe(data => {
              this.ReporteService.setList(data);
            })
          })
          this.router.navigate(['administradores/mostrar/reporte/listar']);
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
        }


        this.router.navigate(['administradores/mostrar/reporte']);

      } else {
        this.mensaje = 'Ingrese la descripcion o estado';


    }
  }

}
