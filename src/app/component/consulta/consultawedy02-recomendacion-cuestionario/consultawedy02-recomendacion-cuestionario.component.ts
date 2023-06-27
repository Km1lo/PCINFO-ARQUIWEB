import { Component,OnInit } from '@angular/core';
import { recomendacionCuestionarioDTO } from 'src/app/model/recomendacionCuestionarioDTO';
import { MatTableDataSource } from '@angular/material/table';
import { RecomendacionService } from 'src/app/service/recomendacion.service';

@Component({
  selector: 'app-consultawedy02-recomendacion-cuestionario',
  templateUrl: './consultawedy02-recomendacion-cuestionario.component.html',
  styleUrls: ['./consultawedy02-recomendacion-cuestionario.component.css']
})
export class Consultawedy02RecomendacionCuestionarioComponent implements OnInit{
  promediolistar:recomendacionCuestionarioDTO[]=[];
  dataSource:MatTableDataSource<recomendacionCuestionarioDTO> = new MatTableDataSource();
  displayedColumns:string[] = ['tipo_form','promedio_valoracion'];

  constructor(private rS:RecomendacionService){}


  ngOnInit(): void {
    this.rS.getPromedioRecomendacion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getPromedioRecomendacion(): void {
    this.rS.getPromedioRecomendacion()
      .subscribe((data: recomendacionCuestionarioDTO[]) => {
        this.promediolistar = data;
      });
  }
}
