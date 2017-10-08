Angular 2
Banu Prakash
CO-FOUNDER Advantech
banu@advantech-global.com
banuprakashc@yahoo.co.in
9845801302

------------------------------------------------
	1) JavaScript
	2) Knowledge on NodeJS
	3) Webpack
	4) TypeScript

	ES6
		1) arrow operator

		function add(x, y) {
			return x + y;
		}

		var add = (x,y) => x + y;


	High Order functions:
		1) functions which accpet other functions as arguments
		2) functions which return a function

		function map(items, mappingFn) {
			///
					mappingFn(item);
			///
		}


		map(items, function(item) {
			return item * 2;
		});

 		map(items,  (item) => item * 2);
	
	2) Scope

		Prior to ES5

			function test() {
				var x = 10;

					if( x > 10 ) {
						var y = 15; // hoisted to function scope
						z = 100; // hoisted to global scope
					}
					// i can use y here
			}
			// z is visible

			In above code:
				x,y are test() scope

		ES6 introduced let and const for block scope var and constant
		function test() {
				var x = 10;

					if( x > 10 ) {
						let y = 15; // hoisted to function scope
						z = 100; // hoisted to global scope
					}
					// i can't use y here
			}

	3) Promise API
		Asynchronous calls returns a deferred data

		function doSomeTask() {
			return new Promise(resolve, reject) {
				setTimeout(function() {
					// http call
					resolve("done"); // reject("error");
				}, 1000);
			}
		}

		on controller:
		// synch :--> var result = doSomeTask();

		// Async
		doSomeTask().then(function(data) {

		},
		function(err) {

		});

	4) 

		var colors = ["red","green","blue","pink","orange"];

		var [r,g,b, others] = colors;

	
	TypeScript gives us concept of datatypes
	number, string, boolean, any

	function add(x, y) {
			return x + y;
	}

	// not yet understood by browser

	TSC 
	function add(x: number, y: number) {
		return x + y;
	}

	add("a","b"); // error
-------------

	Webpack
	bundler for web application

	JS modules:
		AMD, CommonJS, ES6 module system

		Asyncronous Module Definition (requireJS)
		CommonJS is used by NodeJS

		ES6

		x.js
		export class X {

		}
		export class A {

		}
		 class B {

		}

		y.js
		import {X, A} from x;
--------------------------------------------------------------------

	Angular 2

	its a Framework for building web applications [ SPA ]

	Why Angular 2?
		1) Routing
			EASY to bookmark
			helpful for SEO
			BACK and PREV should be between views and pages
			Authenticate a particuler Route
		2) Data Binding
			most of the templates [ Underscore, Handlebars, Mustache ] support one-way binding

			SERVER ---> Template

			We may need two-way binding in many scenarios

		3) Better Rendering of views

		4) Caching of templates
		5) Better AJAX calls with Observable

	-------------------------

	Building blocks of Angular 2:
	1) Component
	2) Directive
	3) Services [DataService]
	4) Pipes
	5) Routing
	6) templates


	Steps:
	1) npm install -g @angular/cli 

	2) ng new customerapp [ skeleton code ]
		installing ... 		terminate
	3) cd customerapp
		npm install
	4) 


	function add(x, y) { return ;
			x + y;
	}

	add(4,5); 
-------------------------------------

	.angular-cli.json

		main: "main.ts"

		styles: global styles, 3rd part css

	main.ts
		---> bootStrap AppModule [ Which is the main module]

	AppModule
		--> providers => services register
		---> imports ==> importing other modules alog with built-in modules
			like BrowserModule, FormsModule, HttpModule
		--> declarations ===> include all the components
		--> bootstrap ==> Root Component <app-root></app-root>

	Component
		templateUrl and stylesUrl
		@Component
		state and behavior
	Between Components communication is done using
		@Input() and @Output()
		EventEmitter ==> to generate user defined events

	{{}} Angular Expression for One way binding 

	[property] Property binding [ Component to template ]

	(click) event binding [ template --> Component ]

	[()] ===> for two way binding

 --------
 	ngModel is used for TemplateDriven Forms



 npm i -g json-server

 json-server will work as RESTful Web server

 json-server --watch data.json --port 3000 



------------

custom pipes

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

<p>Super power boost: {{2 | exponentialStrength: 10}}</p>		

Super power boost: 1024

----------------------------------------------------
	
	Recap
	-----

	1) 	.angular-cli.json

		where global css and entry "ts" [main.ts] is configured 

	2) main.ts
		we have  [angular-cli] configured the root module bootstraping

	3) AppModule.ts is the default root module which is bootstrapped
		In this module common built-in modules are loaded using imports
			a) BrowserModule, FormsModule, HttpModule
			b) All components managed by this module are alos loaded using "declarations"
			c) providers are used to load "services"
			d) we need to specify the root component, which is what is bootstrapped

	-------
	Declorators @NgModule, @Component, @Injectable

	-------

	Communication between components can take place using @Input() and @Output()

	@Input() is used to pass on data from parent to child component

	@Output() is used by the child component to trigger an event on parent [can pass data as event param]

	@ViewChild() can be used by the component in case if it wants to invoke the child component methods

	-------------

	{{}} expression

	[property] bind property

	() bind event

	[(ngModel)] two-way binding

	---------------------------------------------------



	Multiple Modules and Routing
	----------------------------

	Code should be Modular. Normally we create modules for:
	1) common Modules [ which are used throughout your application]
		most of the time  interfaces [ Domain/entity classes], common services, utilities

	2) seperate module for each Route

	---------

	1) extract customer-sample-app
	2) npm install
	3) open it in Visual code

	---------------------------------

    	In this application we have 4 modules and Routes
    	a) AppRoutingModule and AppModule
    	b) CustomersRoutingModule and CustomersModule
    	c) CustomerRoutingModule and CustomerModule [ edit, delete, orders, details for single ]
    	d) LoginRoutingModule and LoginModule [ No routerLink to this ]


	1) Services changes
		forkJoin() for parallel http calls
		flatMap() to convert a type of stream to b type [
			getting parent data from child info]

		Further reading: http://rxmarbles.com/

	Routing
	---------
	1) 	http://localhost:4200

	AppRoutingModule
		 { path: '', pathMatch: 'full', redirectTo: '/about' },

	invokes
		 { path: 'about', component:AboutComponent },


	2) 	http://localhost:4200/customers

	   { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
 

	   Lazy Loads CustomersModule 

	   For Eager Loading of CustomerComponent use as shown below:
	      { path: 'customers',component: CustomersComponent},

	  3) 
	  In customer.card.html:
	  <a [routerLink]="['/customers',customer.id,'edit']">
                            <i title="Edit"  
                               class="pull-right glyphicon glyphicon-edit edit-icon white"></i>
     </a>

	  http://localhost:4200/customers/1/edit

	  { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule'},

	  Lazy loading in case if "parent module" has not imported this "CustomerModule"
	  else Eager Loading [ See Network Chunks]

	  "CustomerRoutingModule"
	  	we have configured for "edit"
	  		 children: [
      
      	 { 
   			path: '',  // customers/1
    component: CustomerComponent,
    children: [
      
      { path:'edit',   // customers/1/edit
        component: CustomerEditComponent  ,
         canActivate: [ CanActivateGuard ],
         canDeactivate: [ CanDeactivateGuard ] 
      }
       
    ]

    --------

http://onehungrymind.com/named-router-outlets-in-angular-2/



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'speakers', component: SpeakersComponent, 
    children: [
    { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
    { path: ':id', component: BioComponent, outlet: 'bio' }
  ] }
];


 <div class="columns">
  <md-card>
    <router-outlet name="list"></router-outlet>
  </md-card>
  <md-card>
    <router-outlet name="bio"></router-outlet>
  </md-card>
</div>


<button md-button
  [routerLink]="['/speakers', {outlets: {'list': ['speakersList'], 'bio': ['none']}}]">
  Speakers
</button>


<md-grid-list cols="3" gutterSize="4px">
  <md-grid-tile
    *ngFor="let speaker of speakers"
    [style.background-image]="'url(assets/' + speaker.src + ')'"
    (click)="showBio(speaker.id)"></md-grid-tile>
</md-grid-list>


showBio(id) {
  this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
}


-----------------

Pipes
	Built-In pipes: Uppsercase, LowerCase, DatePipe

	{customer.firstName | uppercase}

 

Custom Pipes:

import {Pipe, PipeTransform} from '@angular/pipes';

@Pipe({name: 'sample' })
export class SamplePipe implements PipeTransform {
  transform(value: any, limit: number): string|null {
  	if( value == undefined || value == '') {
  		return "Not Available";
  	} else {
  		return value.substring(0,limit);
  	}
  }
}

	{customer.firstName | sample: 3}
--------------------------------------------------------
	
	Best Practice:
		1) Implement Routing with canActivate and canDevative
		2) Code should be Modular, create modules for logical grouping of related files,
			always create a CoreModule/SharedModule which contains interfaces, services and pipes used accross application
		3) Follow JohnPapa recommendations on Angular 2
			https://github.com/johnpapa/angular-styleguide/blob/master/a2/README.md

		4) Follow SOLID design Principles
			S --> Single Responsibilty
				Each component should be independent, should not contain any business logic and http calls
			O --> Open close Princple

			I ---> Interface seggrations

			D ---> Dependency Injection

					  constructor(private dataService: DataService) { }

		5) Folder structures
			create seperate folders for every module:
				it should contains: component, template and css
-----------------------------------------------------------------------


	Deploying Angular 2 apps

	$ ng build
		contents of "dist" folder can be deployed on any server
			copy them to "webapps" folder of JAva web application
			or any server where static contents [ html] are loaded 
------------

	to perform "minification" and "uglify" on your code use "ng eject" and customize webpack.config.js

--------------------


