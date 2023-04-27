import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioComponent } from './component/comentario/comentario.component';
import { ComentarioRegistrarComponent } from './component/comentario/comentario-registrar/comentario-registrar.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
