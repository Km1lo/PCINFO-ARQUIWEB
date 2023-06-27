import { Component,OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { reporteUsuarioDTO } from 'src/app/model/reporteUsuarioDTO';
import { ReporteService } from 'src/app/service/reporte.service';

@Component({
  selector: 'app-consulta01-anth',
  templateUrl: './consulta01-anth.component.html',
  styleUrls: ['./consulta01-anth.component.css']
})
export class Consulta01AnthComponent implements OnInit{
  reporte:reporteUsuarioDTO[] = [];
  dataSource:MatTableDataSource<reporteUsuarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['nombre','apellidop','apellidom','estado']
  constructor(private rS: ReporteService) { }
  ngOnInit(): void {
    this.rS.getReporte1ByEstado().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getReporteEstadoByUsuario(): void {
    this.rS.getReporte1ByEstado()
      .subscribe((data: reporteUsuarioDTO[]) => {
        this.reporte = data;
      });

  }


}
