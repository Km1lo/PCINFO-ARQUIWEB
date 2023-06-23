import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  role:string="";
  lista: Usuario[] = []
  dataSource:MatTableDataSource<Usuario> = new MatTableDataSource();
  idMayor: number = 0;
  displayedColumns: string[] = ['id', 'dni', 'nombre', 'apellidop', 'apellidom', 'correo', 'sexo', 'edad', 'contrasenia', 'pais', 'accion01', 'accion2']
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private uS:UsuarioService, private dialog: MatDialog, private ls:LoginService) { }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.uS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    })
    this.uS.getList().subscribe(data=>{

      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; // Asignar paginator de nuevo // RECONTRA IMPORTANTE

    })
    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }


  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
