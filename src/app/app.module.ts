import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComentarioComponent } from './component/comentario/comentario.component';
import { ComentarioListarComponent } from './component/comentario/comentario-listar/comentario-listar.component';
import { ComentarioRegistrarComponent } from './component/comentario/comentario-registrar/comentario-registrar.component';
import { ComentarioDialogoComponent } from './component/comentario/comentario-listar/comentario-dialogo/comentario-dialogo.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ReporteListarComponent } from './component/reporte/reporte-listar/reporte-listar.component';
import { ReporteRegistrarComponent } from './component/reporte/reporte-registrar/reporte-registrar.component';
import { ReporteDialogoComponent } from './component/reporte/reporte-listar/reporte-dialogo/reporte-dialogo.component';
import { MatSelectModule } from '@angular/material/select';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorListarComponent } from './component/administrador/administrador-listar/administrador-listar.component';
import { AdministradorRegistrarComponent } from './component/administrador/administrador-registrar/administrador-registrar.component';
import { AdministradorDialogoComponent } from './component/administrador/administrador-listar/administrador-dialogo/administrador-dialogo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RecomendacionComponent } from './component/recomendacion/recomendacion.component';
import { RecomendacionListarComponent } from './component/recomendacion/recomendacion-listar/recomendacion-listar.component';
import { RecomendacionRegistrarComponent } from './component/recomendacion/recomendacion-registrar/recomendacion-registrar.component';
import { RecomendacionDialogoComponent } from './component/recomendacion/recomendacion-listar/recomendacion-dialogo/recomendacion-dialogo.component';
@NgModule({
  declarations: [
    AppComponent,
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
    RecomendacionDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
