import { Component,OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administrador-index',
  templateUrl: './administrador-index.component.html',
  styleUrls: ['./administrador-index.component.css']
})
export class AdministradorIndexComponent implements OnInit{
  selectedValor:number=0;
  auxiliar:number=0;
  auxiliar2:number=1;

  clickValues:number[] =[];
  constructor(public route:ActivatedRoute) { }
  ngOnInit(): void {

  }

}
