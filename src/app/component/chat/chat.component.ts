import { ChatService } from './../../services/chat.service';
import { SocketService } from './../../services/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text = "";
   constructor(public chats: ChatService){}
  ngOnInit(): void {

}


sendMessage(){
let messageInfo = {
  text: this.text,
  messageType: 1
};
this.chats.sendMessage(messageInfo);
this.text = '';
}
}
