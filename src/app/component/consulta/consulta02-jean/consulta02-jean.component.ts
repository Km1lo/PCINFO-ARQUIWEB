import { Component,OnInit } from '@angular/core';
import { Reporte } from 'src/app/model/reporte';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteService } from 'src/app/service/reporte.service';
import { reporteUsuarioDTO } from 'src/app/model/reporteUsuarioDTO';

@Component({
  selector: 'app-consulta02-jean',
  templateUrl: './consulta02-jean.component.html',
  styleUrls: ['./consulta02-jean.component.css']
})
export class Consulta02JeanComponent  implements OnInit{
  reporte:reporteUsuarioDTO[] = [];
  dataSource:MatTableDataSource<reporteUsuarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['nombre','apellido','descripcion']
  constructor(private rS: ReporteService) { }

  ngOnInit(): void {
    this.rS.getReporteByEstado().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getReporteCountByEstado(): void {
    this.rS.getReporteByEstado()
      .subscribe((data: reporteUsuarioDTO[]) => {
        this.reporte = data;
      });

  }


}

