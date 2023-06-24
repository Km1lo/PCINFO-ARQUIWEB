import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Componente } from 'src/app/model/componente';
import { ComponenteService } from 'src/app/service/componente.service';
import { MatDialog } from '@angular/material/dialog';
import { ComponenteDialogoComponent } from './componente-dialogo/componente-dialogo.component';


@Component({
  selector: 'app-componente-listar',
  templateUrl: './componente-listar.component.html',
  styleUrls: ['./componente-listar.component.css']
})
export class ComponenteListarComponent implements OnInit{
  cards: Componente[] = [];
  idMayor: number = 0;

  cardsFiltradas: Componente[] = [];
  filtroTexto: string = "";

  constructor(private cS: ComponenteService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.cards = data;
    });
    this.cS.getList().subscribe(data => {
      this.cards = data;
    });
    this.cS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirm(id:number){
    this.idMayor = id;
    this.dialog.open(ComponenteDialogoComponent);
  }

  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setList(data);
      });
    });
  }

  filter(e:any) {
    this.cards.filter = e.target.value.trim();
  }

}
