import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MatCardModule } from '@angular/material/card';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';
import { RecomendacionListarComponent } from './recomendacion/recomendacion-listar/recomendacion-listar.component';
import { RecomendacionRegistrarComponent } from './recomendacion/recomendacion-registrar/recomendacion-registrar.component';
import { RecomendacionDialogoComponent } from './recomendacion/recomendacion-listar/recomendacion-dialogo/recomendacion-dialogo.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { CuestionarioListarComponent } from './cuestionario/cuestionario-listar/cuestionario-listar.component';
import { CuestionarioRegistrarComponent } from './cuestionario/cuestionario-registrar/cuestionario-registrar.component';
import { CuestionarioDialogoComponent } from './cuestionario/cuestionario-listar/cuestionario-dialogo/cuestionario-dialogo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioRegistrarComponent } from './usuario/usuario-registrar/usuario-registrar.component';
import { UsuarioDialogoComponent } from './usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarIndexComponent } from './toolbar/toolbar-index/toolbar-index.component';
import { ComponenteComponent } from './componente/componente.component';
import { ComponenteListarComponent } from './componente/componente-listar/componente-listar.component';
import { ComponenteDialogoComponent } from './componente/componente-listar/componente-dialogo/componente-dialogo.component';
import { ComponenteRegistrarComponent } from './componente/componente-registrar/componente-registrar.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { Consulta01Component } from './consulta/consulta01/consulta01.component';
import { Consultacamilo01UsuarioComentarioComponent } from './consulta/consultacamilo01-usuario-comentario/consultacamilo01-usuario-comentario.component';
import { Consulta02JeanComponent } from './consulta/consulta02-jean/consulta02-jean.component';
import { Consultawedy01RecomendacionCuestionarioComponent } from './consulta/consultawedy01-recomendacion-cuestionario/consultawedy01-recomendacion-cuestionario.component';
import { Consultacamilo02UsuarioComentarioFechaComponent } from './consulta/consultacamilo02-usuario-comentario-fecha/consultacamilo02-usuario-comentario-fecha.component';
import { Consultawedy02RecomendacionCuestionarioComponent } from './consulta/consultawedy02-recomendacion-cuestionario/consultawedy02-recomendacion-cuestionario.component';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { ChatgptIndexComponent } from './chatgpt/chatgpt-index/chatgpt-index.component';


import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Consulta01AnthComponent } from './consulta/consulta01-anth/consulta01-anth.component';
import { Consulta02FabianComponent } from './consulta/consulta02-fabian/consulta02-fabian.component';
import { Consulta01FabianComponent } from './consulta/consulta01-fabian/consulta01-fabian.component';
import { Consulta02AnthComponent } from './consulta/consulta02-anth/consulta02-anth.component';


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
    RecomendacionComponent,
    RecomendacionListarComponent,
    RecomendacionRegistrarComponent,
    RecomendacionDialogoComponent,
    CuestionarioComponent,
    CuestionarioListarComponent,
    CuestionarioRegistrarComponent,
    CuestionarioDialogoComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioRegistrarComponent,
    UsuarioDialogoComponent,
    ToolbarComponent,
    ToolbarIndexComponent,
    ComponenteComponent,
    ComponenteListarComponent,
    ComponenteDialogoComponent,
    ComponenteRegistrarComponent,
    ConsultaComponent,
    Consulta01Component,
    Consultacamilo01UsuarioComentarioComponent,
    Consulta02JeanComponent,
    Consultawedy01RecomendacionCuestionarioComponent,
    Consultacamilo02UsuarioComentarioFechaComponent,
    Consultawedy02RecomendacionCuestionarioComponent,
    ChatgptComponent,
    ChatgptIndexComponent,
    Consulta01AnthComponent,
    Consulta02FabianComponent,
    Consulta01FabianComponent,
    Consulta02AnthComponent
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
    PagesRoutingModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
