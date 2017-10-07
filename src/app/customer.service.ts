import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';

import {Customer} from './common/interfaces';
@Injectable()
export class CustomerService {
  baseUrl:string = "http://localhost:3000/customers/"
  
  constructor( private http: Http) { }
  
  getCustomers() : Observable<Customer[]>{
   return this.http.get(this.baseUrl).map(data => data.json());
  }

  getCustomer(id:number):Observable<Customer>{
    return this.http.get(`${this.baseUrl}/${id}`).map(data => data.json());
  }

  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete(`${this.baseUrl}/${id}`).map(data => data.json());
  }

  updateCustomer(id:number, customer:Customer):Observable<Customer>{
    return this.http.put(`${this.baseUrl}/${id}`, customer).map(data => data.json());
  }
}
