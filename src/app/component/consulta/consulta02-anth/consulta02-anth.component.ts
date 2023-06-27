import { Component, OnInit } from '@angular/core';
import { usuarioCuestionarioDTO } from 'src/app/model/usuarioCuestionarioDTO';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-consulta02-anth',
  templateUrl: './consulta02-anth.component.html',
  styleUrls: ['./consulta02-anth.component.css']
})
export class Consulta02AnthComponent implements OnInit {
  cuestionarioCounts:usuarioCuestionarioDTO[] = [];
  dataSource:MatTableDataSource<usuarioCuestionarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['apellidop','apellidom','cuestionarioCount']
  constructor(private uS: UsuarioService) { }

  ngOnInit(): void {
    this.uS.getUsuarioCuestionario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getUsuarioCuestionario(): void {
    this.uS.getUsuarioCuestionario()
      .subscribe((data: usuarioCuestionarioDTO[]) => {
        this.cuestionarioCounts = data;
      });
  }

}
