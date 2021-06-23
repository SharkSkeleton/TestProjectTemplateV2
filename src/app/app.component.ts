import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProjectTemplateV2';
  table_flag = false;

  change_flag() {
    this.table_flag = !this.table_flag;
  }

}
