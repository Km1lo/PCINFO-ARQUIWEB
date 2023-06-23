import { Component,OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-administrador-index',
  templateUrl: './administrador-index.component.html',
  styleUrls: ['./administrador-index.component.css']
})
export class AdministradorIndexComponent implements OnInit{
  role:string="";
  selectedValor:number=0;
  auxiliar:number=0;
  auxiliar2:number=1;

  clickValues:number[] =[];
  constructor(public route:ActivatedRoute, private ls:LoginService) { }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

  }

}
