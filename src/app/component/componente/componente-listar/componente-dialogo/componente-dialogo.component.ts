import { Component, OnInit } from '@angular/core';
import { ComponenteService } from 'src/app/service/componente.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-componente-dialogo',
  templateUrl: './componente-dialogo.component.html',
  styleUrls: ['./componente-dialogo.component.css']
})
export class ComponenteDialogoComponent implements OnInit {

    constructor(private aS:ComponenteService,
      private dialogRef: MatDialogRef<ComponenteDialogoComponent>) { }

    ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
