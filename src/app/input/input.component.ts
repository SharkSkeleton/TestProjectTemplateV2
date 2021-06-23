import {Component, OnInit, Output} from '@angular/core';
import {MessageService} from "../message.service";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  text = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  send_data() {
    this.messageService.add(this.text);
  }


}
