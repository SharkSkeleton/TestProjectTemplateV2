import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // @ts-ignore
  @Input() initial_data;
  table = [{
    LINE: 0,
    COLUMN: 0,
    LABEL: '',
    TYPE: '',
    VALUE: ''
  }];
  max_line = 0;
  max_column = 0;
  child_data = {
    label: 'A',
    placeholder: '',
    options: [],
    flag: true
  };

  constructor() {}

  ngOnInit(): void {
    let my_data = this.initial_data;
    let my_data_with_new_line = my_data.split("\n");
    let my_data_each_word = this.dividing_words(my_data_with_new_line);
    this.filing_table(my_data_each_word);
    this.max_line = this.update_max_lines();
    this.max_column = this.update_max_columns();
  }

  counter(i: number) {
    return new Array(i);
  }

  dividing_words(data: string[]) {
    let each_word = [];
    for (let i = 0; i < data.length; i++) {
      each_word.push(data[i].split(";"));
    }
    return each_word;
  }

  filing_table_elements(data: string[]) {
    let table_element = {
      LINE: 0,
      COLUMN: 0,
      LABEL: '',
      TYPE: '',
      VALUE: ''
    }
    table_element.LINE = Number(data[0]);
    table_element.COLUMN = Number(data[1]);
    table_element.LABEL = data[2];
    table_element.TYPE = data[3];
    table_element.VALUE = data[4];
    return table_element;
  }

  filing_table(data: string[][]) {
    for (let i = 0; i < data.length; i++) {
      // @ts-ignore
      this.table.push(this.filing_table_elements(data[i]));
    }
  }

  get_lines() {
    let columns = [];
    for (const property in this.table) {
      // @ts-ignore
      columns.push(this.table[property].LINE);
    }
    return columns;
  }

  get_columns() {
    let columns = [];
    for (const property in this.table) {
      // @ts-ignore
      columns.push(this.table[property].COLUMN);
    }
    return columns;
  }

  update_max_lines() {
    return Math.max.apply(Math, this.get_lines());
  }

  update_max_columns() {
    return Math.max.apply(Math, this.get_columns());
  }

  check_exist(index_1: number, index_2: number) {
    // SELECT
    for (let i = 0; i < this.table.length; i++) {
      if ((this.table[i].LINE - 1) == index_1 && (this.table[i].COLUMN - 1) == index_2) {
        if (this.table[i].TYPE == 'TEXT_INPUT') this.child_data.flag = true;
        else if (this.table[i].TYPE == 'SELECT') this.child_data.flag = false;
        this.child_data.label = this.table[i].LABEL;
        if (!this.table[i].VALUE.includes(',')) this.child_data.placeholder = this.table[i].VALUE;
        else { // @ts-ignore
          this.child_data.options = this.table[i].VALUE.split(',');
        }
        return true;
      }
    }
    return false;
  }
}
