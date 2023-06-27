import { Component, NgModule } from '@angular/core';
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

import { ComponenteComponent } from './componente/componente.component';
import { ComponenteRegistrarComponent } from './componente/componente-registrar/componente-registrar.component';
import { ComponenteListarComponent } from './componente/componente-listar/componente-listar.component';
import { Consulta01Component } from './consulta/consulta01/consulta01.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { Consultacamilo01UsuarioComentarioComponent } from './consulta/consultacamilo01-usuario-comentario/consultacamilo01-usuario-comentario.component';
import { Consulta02JeanComponent } from './consulta/consulta02-jean/consulta02-jean.component';
import { Consultawedy01RecomendacionCuestionarioComponent } from './consulta/consultawedy01-recomendacion-cuestionario/consultawedy01-recomendacion-cuestionario.component';
import { Consultacamilo02UsuarioComentarioFechaComponent } from './consulta/consultacamilo02-usuario-comentario-fecha/consultacamilo02-usuario-comentario-fecha.component';
import { Consultawedy02RecomendacionCuestionarioComponent } from './consulta/consultawedy02-recomendacion-cuestionario/consultawedy02-recomendacion-cuestionario.component';
import { ChatgptIndexComponent } from './chatgpt/chatgpt-index/chatgpt-index.component';
import { Consulta01AnthComponent } from './consulta/consulta01-anth/consulta01-anth.component';
import { Consulta01FabianComponent } from './consulta/consulta01-fabian/consulta01-fabian.component';
import { Consulta02FabianComponent } from './consulta/consulta02-fabian/consulta02-fabian.component';
import { Consulta02AnthComponent } from './consulta/consulta02-anth/consulta02-anth.component';

const routes: Routes = [
  {
    path: 'comentarios', component: ComentarioComponent, children: [

      { path:'listar', component:ComentarioListarComponent },
      { path: 'registrar', component: ComentarioRegistrarComponent },
      { path: 'editar/:id', component: ComentarioRegistrarComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'componentes', component: ComponenteComponent, children: [
      { path:'listar', component:ComponenteListarComponent },
      { path: 'registrar', component: ComponenteRegistrarComponent },
      { path: 'editar/:id', component: ComponenteRegistrarComponent }
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

  {
    path: 'consultas', component: ConsultaComponent, children: [

      {path:'usuario-count-comentario',component:Consultacamilo01UsuarioComentarioComponent},
      {path:'usuario-fecha-comentario', component:Consultacamilo02UsuarioComentarioFechaComponent},


      {path:'recomendacion-cuestionario', component:Consultawedy01RecomendacionCuestionarioComponent},
      {path:'recomendacion-promedio',component:Consultawedy02RecomendacionCuestionarioComponent},


      { path: 'reporte-count-usuario', component: Consulta01Component },
      { path: 'reporte-count2-usuario', component: Consulta02JeanComponent },


      { path: 'reporte-estado-usuario', component: Consulta01AnthComponent },
      { path: 'cuestionario-count-usuario', component: Consulta02AnthComponent },


      { path: 'cuestionario-procesador-usuario', component: Consulta01FabianComponent },
      { path: 'cuestionario-procesador2-usuario', component: Consulta02FabianComponent }


    ],canActivate:[GuardService]
   },
   {
    path: 'chatgpt', component: ChatgptIndexComponent, canActivate:[GuardService]
   }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
