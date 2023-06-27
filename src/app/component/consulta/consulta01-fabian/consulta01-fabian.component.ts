import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cuestionarioUsuarioDTO } from 'src/app/model/cuestionarioUsuarioDTO';
import { CuestionarioService } from 'src/app/service/cuestionario.service';

@Component({
  selector: 'app-consulta01-fabian',
  templateUrl: './consulta01-fabian.component.html',
  styleUrls: ['./consulta01-fabian.component.css']
})
export class Consulta01FabianComponent implements OnInit{
  cuestionario:cuestionarioUsuarioDTO[] = [];
  dataSource:MatTableDataSource<cuestionarioUsuarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['nombre','apellidop','apellidom','procesador']
  constructor(private rS: CuestionarioService) { }
  ngOnInit(): void {
    this.rS.getCuestionario1EstadoByUsuario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getCuestionario1EstadoByUsuario(): void {
    this.rS.getCuestionario1EstadoByUsuario()
      .subscribe((data: cuestionarioUsuarioDTO[]) => {
        this.cuestionario = data;
      });

  }

}
