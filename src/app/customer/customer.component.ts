import { Component, OnInit } from '@angular/core';
import {Customer} from '../common/interfaces';
import {CustomerService} from '../customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 customers:Customer[] = [];
 mainCustomers:Customer[] = [];
 displayMode:string;
 searchText:string = "";
 customerToEdit:Customer;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {

    this.customerService.getCustomers().subscribe(data =>{
      this.mainCustomers = this.customers =data;
    });
    /*
    this.customerService.getCustomers().then(function(data) =>{
      this.mainCustomers = this.customers =data;
    });
     */
  //   this.mainCustomers = this.customers =  [
  //   {
  //     "id": 1,
  //     "firstName": "Rachel",
  //     "lastName": "Green ",
  //     "gender": "female",
  //     "address": "some addres"
  //   },
  //   {
  //     "id": 2,
  //     "firstName": "Chandler",
  //     "lastName": "Bing",
  //     "gender": "male",
  //     "address": "West Street"
  //   },
  //   {
  //     "id": 3,
  //     "firstName": "Joey",
  //     "lastName": "Trib",
  //     "gender": "male",
  //     "address": "some address"
  //   },
  //   {
  //     "id": 4,
  //     "firstName": "Monica",
  //     "lastName": "Geller",
  //     "gender": "female",
  //     "address": "some address"
  //   },
  //   {
  //     "id": 5,
  //     "firstName": "Ross",
  //     "lastName": "Geller",
  //     "gender": "male",
  //     "address": "some address"
  //   }
  // ];
  }

remove(id:number){
  console.log("parent : "+ id);
  let idx = -1;
  this.customers.forEach((c,index)=>{
    if(c.id === id){
      idx = index;
    }
  });

  if(idx >=0){
    this.customers.splice(idx, 1);
  }
  this.customerService.deleteCustomer(id).subscribe(data=>{
    console.log(data);
  });
}

update(customer:Customer){
  console.log("customer component : " , customer);
    this.customerToEdit = customer;
  }

changeMode(str:string)
{
  this.displayMode = str;
}
doFilter(){
  let result = [];
  this.mainCustomers.forEach((c, index)=>{
    if(c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0
      || c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)
    result.push(c);
  });
  this.customers = result;
}
}
