import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { CustomComponent } from './table/custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
