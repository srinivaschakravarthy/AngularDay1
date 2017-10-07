import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Customer} from '../common/interfaces';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @Input()
  customer:Customer;

  @ViewChild("customerForm") customerForm:NgForm;

  constructor() { }

  ngOnInit() {
  }

submit(){
  console.log("Updated Customer in edit : " , this.customer);
  console.log("customerForm ", this.customerForm);
  this.customerForm.form.markAsPristine;
}
}
