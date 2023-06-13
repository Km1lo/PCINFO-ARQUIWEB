import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cuestionario } from 'src/app/model/cuestionario';
import { CuestionarioService } from 'src/app/service/cuestionario.service';
import { MatDialog } from '@angular/material/dialog';
import { CuestionarioDialogoComponent } from './cuestionario-dialogo/cuestionario-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cuestionario-listar',
  templateUrl: './cuestionario-listar.component.html',
  styleUrls: ['./cuestionario-listar.component.css']
})
export class CuestionarioListarComponent implements OnInit{
  dataSource:MatTableDataSource<Cuestionario> = new MatTableDataSource();
  idMayor: number = 0;

  displayedColumns: string[] = ['id_cuestionario', 'tipo_form', 'uso_de_pc', 'presupuesto', 'tamano_del_pc','diseno','tipo_de_refrigeracion','overclocking','marca_procesador','programas_used','accion01','accion2']
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private aS:CuestionarioService,private dialog: MatDialog) { }
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
    this.dialog.open(CuestionarioDialogoComponent);
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
