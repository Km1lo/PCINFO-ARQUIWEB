import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/model/componente';
import { FormGroup, FormControl } from '@angular/forms';
import { Recomendacion } from 'src/app/model/recomendacion';
import { ComponenteService } from 'src/app/service/componente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecomendacionService } from 'src/app/service/recomendacion.service';

@Component({
  selector: 'app-componente-registrar',
  templateUrl: './componente-registrar.component.html',
  styleUrls: ['./componente-registrar.component.css']
})
export class ComponenteRegistrarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  componente: Componente = new Componente();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false; //no es edicion
  lista: Recomendacion[] = [];
  idRecomendacionSeleccionado: number = 0;

  constructor(
    private ComponenteService: ComponenteService,
    private router: Router,
    private route: ActivatedRoute, private rS: RecomendacionService) { }

    ngOnInit(): void {
      this.rS.list().subscribe(data => { this.lista = data; });

      this.route.params.subscribe((data: Params) => {
        this.id = data['id']; //capturando el id del listado
        this.edicion = data['id'] != null;
        this.init();
      });

      this.form = new FormGroup({
        id: new FormControl(),
        recomendacion: new FormControl(),
        marca: new FormControl(),
        puntaje: new FormControl(),
        descripcion: new FormControl(),
        conjuntodeproductos: new FormControl(),
        generacion: new FormControl(),
        nombreprocesador: new FormControl(),
        litografia: new FormControl(),
        preciorecomendacion: new FormControl(),
        velocidadmemoriaram: new FormControl(),
        tipochipset: new FormControl(),
        compatibilidad: new FormControl(),
        tipommr: new FormControl(),
        velocidadrelojgpu: new FormControl(),
        tamanioram: new FormControl(),
        tamanioplacamadre: new FormControl(),
        zocalo: new FormControl(),
        tamaniomemoria: new FormControl(),
        tipoalmacenamiento: new FormControl(),
        tipofuente: new FormControl(),
        color: new FormControl(),
        tamanio: new FormControl(),
        certificacion: new FormControl(),
        vatios: new FormControl(),
        sistemamodular: new FormControl(),
    })
  }

  init(){

    if(this.edicion){
      this.ComponenteService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          recomendacion: new FormControl(),
          marca: new FormControl(data.marca),
          puntaje: new FormControl(data.puntaje),
          descripcion: new FormControl(data.descripcion),
          conjuntodeproductos: new FormControl(data.conjuntodeproductos),
          generacion: new FormControl(data.generacion),
          nombreprocesador: new FormControl(data.nombreprocesador),
          litografia: new FormControl(data.litografia),
          preciorecomendacion: new FormControl(data.preciorecomendacion),
          velocidadmemoriaram: new FormControl(data.velocidadmemoriaram),
          tipochipset: new FormControl(data.tipochipset),
          compatibilidad: new FormControl(data.compatibilidad),
          tipommr: new FormControl(data.tipommr),
          velocidadrelojgpu: new FormControl(data.velocidadrelojgpu),
          tamanioram: new FormControl(data.tamanioram),
          tamanioplacamadre: new FormControl(data.tamanioplacamadre),
          zocalo: new FormControl(data.zocalo),
          tamaniomemoria: new FormControl(data.tamaniomemoria),
          tipoalmacenamiento: new FormControl(data.tipoalmacenamiento),
          tipofuente: new FormControl(data.tipofuente),
          color: new FormControl(data.color),
          tamanio: new FormControl(data.tamanio),
          certificacion: new FormControl(data.certificacion),
          vatios: new FormControl(data.vatios),
          sistemamodular: new FormControl(data.sistemamodular),
        });
      });
    }

  }

  aceptar():void{
    this.componente.id = this.form.value['id'];
    this.componente.recomendacion = this.form.value['recomendacion'];
    this.componente.marca = this.form.value['marca'];
    this.componente.puntaje = this.form.value['puntaje'];
    this.componente.descripcion = this.form.value['descripcion'];
    this.componente.conjuntodeproductos = this.form.value['conjuntodeproductos'];
    this.componente.generacion = this.form.value['generacion'];
    this.componente.nombreprocesador = this.form.value['nombreprocesador'];
    this.componente.litografia = this.form.value['litografia'];
    this.componente.preciorecomendacion = this.form.value['preciorecomendacion'];
    this.componente.velocidadmemoriaram = this.form.value['velocidadmemoriaram'];
    this.componente.tipochipset = this.form.value['tipochipset'];
    this.componente.compatibilidad = this.form.value['compatibilidad'];
    this.componente.tipommr = this.form.value['tipommr'];
    this.componente.velocidadrelojgpu = this.form.value['velocidadrelojgpu'];
    this.componente.tamanioram = this.form.value['tamanioram'];
    this.componente.tamanioplacamadre = this.form.value['tamanioplacamadre'];
    this.componente.zocalo = this.form.value['zocalo'];
    this.componente.tamaniomemoria = this.form.value['tamaniomemoria'];
    this.componente.tipoalmacenamiento = this.form.value['tipoalmacenamiento'];
    this.componente.tipofuente = this.form.value['tipofuente'];
    this.componente.color = this.form.value['color'];
    this.componente.tamanio = this.form.value['tamanio'];
    this.componente.certificacion = this.form.value['certificacion'];
    this.componente.vatios = this.form.value['vatios'];
    this.componente.sistemamodular = this.form.value['sistemamodular'];

    if(this.idRecomendacionSeleccionado>0){
      let a = new Recomendacion();
      a.id = this.idRecomendacionSeleccionado;
      this.componente.recomendacion = a;
      this.ComponenteService.insert(this.componente).subscribe(() => {
        this.ComponenteService.list().subscribe(data => {
          this.ComponenteService.setList(data);
        })
      })
      this.router.navigate(['/pages/componentes/listar']);
    }
    if(this.form.value['descripcion'].length >0){
      if(this.edicion){
        this.ComponenteService.update(this.componente).subscribe(() => {
          this.ComponenteService.list().subscribe(data => {
            this.ComponenteService.setList(data);
          })
        });
      }
      this.router.navigate(['/pages/componentes/listar']);
    }else{
      this.mensaje = 'Debe ingresar un valor';
    }
  }
}
