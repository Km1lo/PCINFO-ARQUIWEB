import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioComponent } from './component/comentario/comentario.component';
import { ComentarioRegistrarComponent } from './component/comentario/comentario-registrar/comentario-registrar.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ReporteRegistrarComponent } from './component/reporte/reporte-registrar/reporte-registrar.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorRegistrarComponent } from './component/administrador/administrador-registrar/administrador-registrar.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
