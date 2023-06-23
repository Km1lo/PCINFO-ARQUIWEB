import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComentarioRegistrarComponent } from './comentario/comentario-registrar/comentario-registrar.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteRegistrarComponent } from './reporte/reporte-registrar/reporte-registrar.component';

import { RecomendacionComponent } from './recomendacion/recomendacion.component';
import { RecomendacionRegistrarComponent } from './recomendacion/recomendacion-registrar/recomendacion-registrar.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { CuestionarioRegistrarComponent } from './cuestionario/cuestionario-registrar/cuestionario-registrar.component';

import { ComentarioListarComponent } from './comentario/comentario-listar/comentario-listar.component';
import { RecomendacionListarComponent } from './recomendacion/recomendacion-listar/recomendacion-listar.component';
import { ReporteListarComponent } from './reporte/reporte-listar/reporte-listar.component';

import { CuestionarioListarComponent } from './cuestionario/cuestionario-listar/cuestionario-listar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioRegistrarComponent } from './usuario/usuario-registrar/usuario-registrar.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';

const routes: Routes = [

  {
    path: 'comentarios', component: ComentarioComponent, children: [

      { path:'listar', component:ComentarioListarComponent },
      { path: 'registrar', component: ComentarioRegistrarComponent },
      { path: 'editar/:id', component: ComentarioRegistrarComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'recomendacion', component: RecomendacionComponent, children: [
      { path:'listar', component:RecomendacionListarComponent },
      { path: 'editar/:id', component: RecomendacionRegistrarComponent },
      { path: 'registrar', component: RecomendacionRegistrarComponent }

    ],canActivate:[GuardService]
  },
  {

    path: 'usuario', component: UsuarioComponent, children: [
      { path:'listar', component: UsuarioListarComponent },
      { path: 'registrar', component: UsuarioRegistrarComponent },
      { path: 'editar/:id', component: UsuarioRegistrarComponent },
    ],canActivate:[GuardService]

  },
  {
    path: 'cuestionarios',component: CuestionarioComponent, children:[
      { path: 'registrar', component: CuestionarioRegistrarComponent },
      { path: 'editar/:id', component: CuestionarioRegistrarComponent },
      { path:'listar', component: CuestionarioListarComponent }
    ],canActivate:[GuardService]
  },
  {
   path: 'reportes', component: ReporteComponent, children: [
     { path: 'registrar', component: ReporteRegistrarComponent },
     { path: 'editar/:id', component: ReporteRegistrarComponent },
     { path: 'listar', component: ReporteListarComponent }
   ],canActivate:[GuardService]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
