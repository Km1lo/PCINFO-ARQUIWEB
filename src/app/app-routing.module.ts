import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMostrarComponent } from './component/login/login-mostrar/login-mostrar.component';
import { IndexMostrarComponent } from './component/indexa/index-mostrar/index-mostrar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index', component: IndexMostrarComponent
  },
  {
    path: 'login', component: LoginMostrarComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./component/pages.module').then((m) => m.PagesModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
