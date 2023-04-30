import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-administrador-dialogo',
  templateUrl: './administrador-dialogo.component.html',
  styleUrls: ['./administrador-dialogo.component.css']
})
export class AdministradorDialogoComponent implements OnInit {

  constructor(private aS: AdministradorService,
  private dialogRef: MatDialogRef<AdministradorDialogoComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.aS.setConfirmDelete(estado);
    this.dialogRef.close();
    window.location.reload();
  }
}
