import { AfterViewInit, Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatDialog } from '@angular/material/dialog';
import { ReporteDialogoComponent } from './reporte-dialogo/reporte-dialogo.component';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Administrador } from 'src/app/model/administrador';



@Component({
  selector: 'app-reporte-listar',
  templateUrl: './reporte-listar.component.html',
  styleUrls: ['./reporte-listar.component.css']
})
export class ReporteListarComponent implements OnInit {
  lista: Reporte[] = [];

dataSource:MatTableDataSource<Reporte> = new MatTableDataSource();
idMayor: number = 0;
displayedColumns: string[] = ['id_reporte', 'descripcion', 'fecha', 'estado','usuario','accion01','accion2']
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


constructor(private aS:ReporteService,private dialog: MatDialog) { }
ngOnInit(): void {
  this.aS.list().subscribe(data=>{
    this.dataSource= new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator
  })
  this.aS.getList().subscribe(data=>{

    this.dataSource=new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator; // Asignar paginator de nuevo // RECONTRA IMPORTANTE

  })
  this.aS.getConfirmDelete().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  })

}

confirm(id: number) {
  this.idMayor = id;
  this.dialog.open(ReporteDialogoComponent);
}
eliminar(id: number) {
  this.aS.delete(id).subscribe(() => {
    this.aS.list().subscribe(data => {
      this.aS.setList(data);
    })
  })
}
filter(e: any) {
  this.dataSource.filter = e.target.value.trim();
}

}

