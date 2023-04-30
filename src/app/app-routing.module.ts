import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioComponent } from './component/comentario/comentario.component';
import { ComentarioRegistrarComponent } from './component/comentario/comentario-registrar/comentario-registrar.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ReporteRegistrarComponent } from './component/reporte/reporte-registrar/reporte-registrar.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorRegistrarComponent } from './component/administrador/administrador-registrar/administrador-registrar.component';
import { RecomendacionComponent } from './component/recomendacion/recomendacion.component';
import { RecomendacionRegistrarComponent } from './component/recomendacion/recomendacion-registrar/recomendacion-registrar.component';
import { CuestionarioComponent } from './component/cuestionario/cuestionario.component';
import { CuestionarioRegistrarComponent } from './component/cuestionario/cuestionario-registrar/cuestionario-registrar.component';

const routes: Routes = [
  {
    path: 'comentarios', component: ComentarioComponent, children: [
      {
        path: 'registrar', component: ComentarioRegistrarComponent
      },
      {
        path: 'editar/:id', component: ComentarioRegistrarComponent
      }
    ]
  },
  {
    path: 'reportes', component: ReporteComponent, children: [
      {
        path: 'registrar', component: ReporteRegistrarComponent
      },
      {
        path: 'editar/:id', component: ReporteRegistrarComponent
      }
    ]
  },
  {
    path: 'administradores', component: AdministradorComponent, children: [
      {
        path: 'registrar', component: AdministradorRegistrarComponent
      },
      {
        path: 'editar/:id', component: AdministradorRegistrarComponent
      }
    ]
  },
  {
    path: 'recomendacion', component: RecomendacionComponent, children: [
      {
        path: 'registrar', component: RecomendacionRegistrarComponent
      },
      {
        path: 'editar/:id', component: RecomendacionRegistrarComponent
      }
    ]
  },
  {
    path: 'cuestionarios',component: CuestionarioComponent, children:[
      {
        path: 'registrar', component: CuestionarioRegistrarComponent
      },
      {
        path: 'editar/:id', component: CuestionarioRegistrarComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
