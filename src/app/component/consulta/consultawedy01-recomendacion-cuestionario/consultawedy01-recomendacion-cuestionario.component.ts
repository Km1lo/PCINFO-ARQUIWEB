import { Component, OnInit } from '@angular/core';
import { recomendacionCuestionarioDTO } from 'src/app/model/recomendacionCuestionarioDTO';
import { MatTableDataSource } from '@angular/material/table';
import { RecomendacionService } from 'src/app/service/recomendacion.service';


@Component({
  selector: 'app-consultawedy01-recomendacion-cuestionario',
  templateUrl: './consultawedy01-recomendacion-cuestionario.component.html',
  styleUrls: ['./consultawedy01-recomendacion-cuestionario.component.css']
})
export class Consultawedy01RecomendacionCuestionarioComponent implements OnInit {
  recomendndacionlistar:recomendacionCuestionarioDTO[]=[];
  dataSource:MatTableDataSource<recomendacionCuestionarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['valoracion_user','programas_used'];

  constructor(private rS:RecomendacionService){}

  ngOnInit(): void {
    this.rS.getRecomendacionCuestionario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getRecomendacionCuestionario(): void {
    this.rS.getRecomendacionCuestionario()
      .subscribe((data: recomendacionCuestionarioDTO[]) => {
        this.recomendndacionlistar = data;
      });
  }
}
