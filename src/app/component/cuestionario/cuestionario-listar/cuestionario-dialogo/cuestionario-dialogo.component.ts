import { Component,OnInit } from '@angular/core';
import { CuestionarioService } from 'src/app/service/cuestionario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cuestionario-dialogo',
  templateUrl: './cuestionario-dialogo.component.html',
  styleUrls: ['./cuestionario-dialogo.component.css']
})
export class CuestionarioDialogoComponent implements OnInit{
  constructor(private aS: CuestionarioService,
    private dialogRef: MatDialogRef<CuestionarioDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
