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
import { LoginComponent } from './component/login/login.component';
import { LoginMostrarComponent } from './component/login/login-mostrar/login-mostrar.component';
import { AdministradorIndexComponent } from './component/administrador/administrador-index/administrador-index.component';
import { ComentarioListarComponent } from './component/comentario/comentario-listar/comentario-listar.component';
import { RecomendacionListarComponent } from './component/recomendacion/recomendacion-listar/recomendacion-listar.component';
import { ReporteListarComponent } from './component/reporte/reporte-listar/reporte-listar.component';
import { AdministradorListarComponent } from './component/administrador/administrador-listar/administrador-listar.component';
import { CuestionarioListarComponent } from './component/cuestionario/cuestionario-listar/cuestionario-listar.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioRegistrarComponent } from './component/usuario/usuario-registrar/usuario-registrar.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';

const routes: Routes = [
  {


    path: 'administradores', component: AdministradorComponent, children: [

      {
        path: 'mostrar', component: AdministradorIndexComponent, children:[
          {
            path: 'comentarios', component: ComentarioComponent, children: [
              {
              path:'listar', component:ComentarioListarComponent
              },
                {
                  path: 'registrar', component: ComentarioRegistrarComponent
                },
                {
                  path: 'editar/:id', component: ComentarioRegistrarComponent
                }
            ]
           }
           //Siguiente
           ,
           {
             path: 'recomendacion', component: RecomendacionComponent, children: [
               {
                 path: 'registrar', component: RecomendacionRegistrarComponent
               },
               {
                 path: 'editar/:id', component: RecomendacionRegistrarComponent
               },
               {
                 path:'listar', component:RecomendacionListarComponent

               }
             ]
           }
           //siguiente
           ,
           {
             path: 'usuario', component: UsuarioComponent, children: [
               {
                 path: 'registrar', component: UsuarioRegistrarComponent
               },
               {
                 path: 'editar/:id', component: UsuarioRegistrarComponent
               },
               {
                 path:'listar', component: UsuarioListarComponent

               }
             ]
           }
           //siguiente
           ,
           {
             path: 'cuestionarios',component: CuestionarioComponent, children:[
               {
                 path: 'registrar', component: CuestionarioRegistrarComponent
               },
               {
                 path: 'editar/:id', component: CuestionarioRegistrarComponent
               },
               {
                path:'listar', component: CuestionarioListarComponent
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
              },
              {
                path: 'listar', component: ReporteListarComponent
              }
            ]
          },
          {
            path:'listar', component:AdministradorListarComponent
          }, {
            path: 'registrar', component: AdministradorRegistrarComponent
          },
          {
            path: 'editar/:id', component: AdministradorRegistrarComponent
          },
        ]

      }
    ]
  },
  {
    path: 'login', component: LoginComponent, children: [
      {
        path: 'registrar', component: AdministradorRegistrarComponent
      },
      {
        path: 'editar/:id', component: AdministradorRegistrarComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
