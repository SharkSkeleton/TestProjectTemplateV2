import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  // @ts-ignore
  @Input() childMessage = {
    label: '',
    placeholder: '',
    options: [],
    flag: true
  };

  label = '';
  input = '';
  placeholder = '';
  options = [];
  flag = true;

  constructor() { }

  ngOnInit(): void {
    this.label = this.childMessage.label;
    this.placeholder = this.childMessage.placeholder;
    this.flag = this.childMessage.flag;
    this.options = this.childMessage.options
  }

  change_component() {
    this.flag = !this.flag;
  }

}

// 1;2;a;TEXT_INPUT;a
// 3;4;b;SELECT;some1,some2
