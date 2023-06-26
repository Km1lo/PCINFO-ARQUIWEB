import { Component, OnInit} from '@angular/core';
import { usuarioComentarioDTO } from 'src/app/model/usuarioComentarioDTO';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-consultacamilo02-usuario-comentario-fecha',
  templateUrl: './consultacamilo02-usuario-comentario-fecha.component.html',
  styleUrls: ['./consultacamilo02-usuario-comentario-fecha.component.css']
})
export class Consultacamilo02UsuarioComentarioFechaComponent implements OnInit {

  comentarioFecha:usuarioComentarioDTO[] = [];
  dataSource:MatTableDataSource<usuarioComentarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['nombre','comentario','fecha']
  constructor(private uS: UsuarioService) { }

  ngOnInit(): void {
    this.uS.getUsuarioComentarioFecha().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getUsuarioComentarioFecha(): void {
    this.uS.getUsuarioComentarioFecha()
      .subscribe((data: usuarioComentarioDTO[]) => {
        this.comentarioFecha = data;
      });
  }



}
