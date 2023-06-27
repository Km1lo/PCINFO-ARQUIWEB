import { Component } from '@angular/core';
import { ChatgptService } from 'src/app/service/chatgpt.service';

@Component({
  selector: 'app-chatgpt-index',
  templateUrl: './chatgpt-index.component.html',
  styleUrls: ['./chatgpt-index.component.css']
})
export class ChatgptIndexComponent {

  message!:string;

  constructor(private chatgptSvc:ChatgptService){}


  sendMessage(){

    this.chatgptSvc.getDataFromOpenAI(this.message);
    this.message = '';

  }
  limpiar(){

    this.chatgptSvc.clearElements();

  }
}
