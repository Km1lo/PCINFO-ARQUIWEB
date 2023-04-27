import { Component,OnInit } from '@angular/core';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reporte-dialogo',
  templateUrl: './reporte-dialogo.component.html',
  styleUrls: ['./reporte-dialogo.component.css']
})
export class ReporteDialogoComponent implements OnInit {
  constructor(private aS: ReporteService,
    private dialogRef: MatDialogRef<ReporteDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
      window.location.reload();
    }

}
