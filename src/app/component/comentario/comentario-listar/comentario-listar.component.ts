import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Comentario } from 'src/app/model/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';
import { MatDialog } from '@angular/material/dialog';
import { ComentarioDialogoComponent } from './comentario-dialogo/comentario-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';




@Component({
  selector: 'app-comentario-listar',
  templateUrl: './comentario-listar.component.html',
  styleUrls: ['./comentario-listar.component.css']
})
export class ComentarioListarComponent implements OnInit {

  lista: Comentario[]=[];

  dataSource:MatTableDataSource<Comentario> = new MatTableDataSource();
  idMayor: number = 0;

  displayedColumns: string[] = ['id', 'comentario', 'fecha', 'idUsuario', 'accion01', 'accion2']
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private cS:ComentarioService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.cS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    })
    this.cS.getList().subscribe(data=>{

      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; // Asignar paginator de nuevo // RECONTRA IMPORTANTE

    })
    this.cS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ComentarioDialogoComponent);
  }
  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
