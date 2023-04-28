import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatDialog } from '@angular/material/dialog';
import { ReporteDialogoComponent } from './reporte-dialogo/reporte-dialogo.component';

@Component({
  selector: 'app-reporte-listar',
  templateUrl: './reporte-listar.component.html',
  styleUrls: ['./reporte-listar.component.css']
})
export class ReporteListarComponent {

dataSource:MatTableDataSource<Reporte> = new MatTableDataSource();
idMayor: number = 0;

displayedColumns: string[] = ['id_reporte', 'descripcion', 'fecha', 'estado','accion01','accion2']

constructor(private aS:ReporteService,private dialog: MatDialog) { }
ngOnInit(): void {
  this.aS.list().subscribe(data=>{
    this.dataSource= new MatTableDataSource(data);
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
