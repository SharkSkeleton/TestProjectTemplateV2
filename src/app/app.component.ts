import { Component } from '@angular/core';
import {MessageService} from "./message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProjectTemplateV2';
  table_flag = false;
  table_input = '';

  constructor(private messageService: MessageService) {}

  change_flag() {
    this.table_input = this.messageService.messages[this.messageService.messages.length - 1];
    this.table_flag = !this.table_flag;
  }

}
