import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/service/administrador.service';
import { MatDialog } from '@angular/material/dialog';
import { AdministradorDialogoComponent } from './administrador-dialogo/administrador-dialogo.component';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-administrador-listar',
  templateUrl: './administrador-listar.component.html',
  styleUrls: ['./administrador-listar.component.css']
})
export class AdministradorListarComponent implements OnInit {
  role:string="";
  dataSource:MatTableDataSource<Administrador> = new MatTableDataSource();
  idMayor: number = 0;

  //crear un displayColumns de la entidad administrador llamando el atributo id de la entidad usuarios
  displayedColumns: string[] = ['id_administrador','profesion', 'area_trabajo', 'horario', 'cumpleanos', 'estado_vacaciones', 'estado_contrato','accion01','accion2']
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private aS:AdministradorService, private dialog:MatDialog, private ls:LoginService) { }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.aS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
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
    this.dialog.open(AdministradorDialogoComponent);
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
