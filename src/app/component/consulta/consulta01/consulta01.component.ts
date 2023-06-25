import { Component,OnInit} from '@angular/core';
import { reporteUsuarioDTO } from 'src/app/model/reporteUsuarioDTO';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteService } from 'src/app/service/reporte.service';

@Component({
  selector: 'app-consulta01',
  templateUrl: './consulta01.component.html',
  styleUrls: ['./consulta01.component.css']
})
export class Consulta01Component  implements OnInit{
  reporteCounts:reporteUsuarioDTO[] = [];
  dataSource:MatTableDataSource<reporteUsuarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['usuario','cantidad']
  constructor(private rS: ReporteService) { }

  ngOnInit(): void {
    this.rS.getReporteCountByUsuario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getReporteCountByUsuario(): void {
    this.rS.getReporteCountByUsuario()
      .subscribe((data: reporteUsuarioDTO[]) => {
        this.reporteCounts = data;
      });

  }


}
