import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

import {CustomerService} from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCardComponent,
    CustomerGridComponent,
    CustomerComponent,
    CustomerEditComponent //Declare all components - reusable
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule //Not just import, mention here 
  ],
  providers: [CustomerService], //Services will be included here
  bootstrap: [AppComponent] // Bootstrap root component
})
export class AppModule { }
