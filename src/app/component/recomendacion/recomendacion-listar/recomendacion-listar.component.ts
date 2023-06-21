import { Component,OnInit,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Recomendacion } from 'src/app/model/recomendacion';
import { RecomendacionService } from 'src/app/service/recomendacion.service';
import { MatDialog } from '@angular/material/dialog';
import { RecomendacionDialogoComponent } from './recomendacion-dialogo/recomendacion-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-recomendacion-listar',
  templateUrl: './recomendacion-listar.component.html',
  styleUrls: ['./recomendacion-listar.component.css']
})
export class RecomendacionListarComponent  implements OnInit {
  lista: Recomendacion[]=[]

  dataSource:MatTableDataSource<Recomendacion>=new MatTableDataSource();
  idMayor: number = 0;

  displayedColumns:string[]=['id','valoracion_user','notas_adicionales','cuestionario','accion01','accion2']
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private as:RecomendacionService,private dialog:MatDialog){}
  ngOnInit(): void {
      this.as.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator

      })
      this.as.getList().subscribe(data=>{

        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator; // Asignar paginator de nuevo // RECONTRA IMPORTANTE

      })
      this.as.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(RecomendacionDialogoComponent);
  }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
