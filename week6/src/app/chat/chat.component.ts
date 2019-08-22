import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messagecontent:string="";
  messages:string[] = [];
  ioconnection: any;

  constructor(private socketService:SocketService) { }

  ngOnInit() {
    this.InitIoConnection();
  }

  private InitIoConnection(){
    this.socketService.initSocket();
    this.ioconnection = this.socketService.onMessage().subscribe((message:string) => {
      this.messages.push(message);
    })
  }

  private chat(){
    if(this.messagecontent){
      this.socketService.send(this.messagecontent);
      let messagecontent=null;
    }else{
      console.log("No message")
    }
  }

}
