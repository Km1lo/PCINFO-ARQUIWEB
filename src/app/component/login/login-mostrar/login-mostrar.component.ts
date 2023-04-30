import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-mostrar',
  templateUrl: './login-mostrar.component.html',
  styleUrls: ['./login-mostrar.component.css']
})
export class LoginMostrarComponent implements OnInit {

  aux:boolean=true;
  clickValues = [];

  constructor (private router:Router){

  }
  ngOnInit(): void {
    // Esta función se ejecutará cuando se inicialice el componente

  }



}
