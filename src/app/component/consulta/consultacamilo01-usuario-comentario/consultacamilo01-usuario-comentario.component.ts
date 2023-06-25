import { Component,OnInit} from '@angular/core';
import { usuarioComentarioDTO } from 'src/app/model/usuarioComentarioDTO';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-consultacamilo01-usuario-comentario',
  templateUrl: './consultacamilo01-usuario-comentario.component.html',
  styleUrls: ['./consultacamilo01-usuario-comentario.component.css']
})
export class Consultacamilo01UsuarioComentarioComponent implements OnInit {
  comentarioCounts:usuarioComentarioDTO[] = [];
  dataSource:MatTableDataSource<usuarioComentarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['apellidop','apellidom','comentarioCount']
  constructor(private uS: UsuarioService) { }

  ngOnInit(): void {
    this.uS.getUsuarioComentario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getUsuarioComentario(): void {
    this.uS.getUsuarioComentario()
      .subscribe((data: usuarioComentarioDTO[]) => {
        this.comentarioCounts = data;
      });
  }

}
