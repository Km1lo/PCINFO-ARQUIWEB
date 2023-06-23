import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-toolbar-index',
  templateUrl: './toolbar-index.component.html',
  styleUrls: ['./toolbar-index.component.css']
})
export class ToolbarIndexComponent implements OnInit {
  role:string="";

  constructor( private ls:LoginService){}
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
  }
}
