import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RecomendacionService } from 'src/app/service/recomendacion.service';

@Component({
  selector: 'app-recomendacion-dialogo',
  templateUrl: './recomendacion-dialogo.component.html',
  styleUrls: ['./recomendacion-dialogo.component.css']
})
export class RecomendacionDialogoComponent  implements OnInit {
  constructor(private as:RecomendacionService,
    private dialogRef:MatDialogRef<RecomendacionDialogoComponent>){}


  ngOnInit(): void {}
      confirmar(estado:boolean)
      {
        this.as.setConfirmDelete(estado);
      this.dialogRef.close();
      window.location.reload();
      }


}
