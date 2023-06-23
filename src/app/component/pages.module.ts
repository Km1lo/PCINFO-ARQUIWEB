import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';

import { ComentarioComponent } from './comentario/comentario.component';
import { ComentarioListarComponent } from './comentario/comentario-listar/comentario-listar.component';
import { ComentarioRegistrarComponent } from './comentario/comentario-registrar/comentario-registrar.component';
import { ComentarioDialogoComponent } from './comentario/comentario-listar/comentario-dialogo/comentario-dialogo.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteListarComponent } from './reporte/reporte-listar/reporte-listar.component';
import { ReporteRegistrarComponent } from './reporte/reporte-registrar/reporte-registrar.component';
import { ReporteDialogoComponent } from './reporte/reporte-listar/reporte-dialogo/reporte-dialogo.component';
import { MatSelectModule } from '@angular/material/select';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorListarComponent } from './administrador/administrador-listar/administrador-listar.component';
import { AdministradorRegistrarComponent } from './administrador/administrador-registrar/administrador-registrar.component';
import { AdministradorDialogoComponent } from './administrador/administrador-listar/administrador-dialogo/administrador-dialogo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';
import { RecomendacionListarComponent } from './recomendacion/recomendacion-listar/recomendacion-listar.component';
import { RecomendacionRegistrarComponent } from './recomendacion/recomendacion-registrar/recomendacion-registrar.component';
import { RecomendacionDialogoComponent } from './recomendacion/recomendacion-listar/recomendacion-dialogo/recomendacion-dialogo.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { CuestionarioListarComponent } from './cuestionario/cuestionario-listar/cuestionario-listar.component';
import { CuestionarioRegistrarComponent } from './cuestionario/cuestionario-registrar/cuestionario-registrar.component';
import { CuestionarioDialogoComponent } from './cuestionario/cuestionario-listar/cuestionario-dialogo/cuestionario-dialogo.component';
import { AdministradorIndexComponent } from './administrador/administrador-index/administrador-index.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioRegistrarComponent } from './usuario/usuario-registrar/usuario-registrar.component';
import { UsuarioDialogoComponent } from './usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
@NgModule({
  declarations: [
    
    ComentarioComponent,
    ComentarioListarComponent,
    ComentarioRegistrarComponent,
    ComentarioDialogoComponent,
    ReporteComponent,
    ReporteListarComponent,
    ReporteRegistrarComponent,
    ReporteDialogoComponent,
    AdministradorComponent,
    AdministradorListarComponent,
    AdministradorRegistrarComponent,
    AdministradorDialogoComponent,
    RecomendacionComponent,
    RecomendacionListarComponent,
    RecomendacionRegistrarComponent,
    RecomendacionDialogoComponent,
    CuestionarioComponent,
    CuestionarioListarComponent,
    CuestionarioRegistrarComponent,
    CuestionarioDialogoComponent,
    AdministradorIndexComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioRegistrarComponent,
    UsuarioDialogoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule,
    PagesRoutingModule

  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
