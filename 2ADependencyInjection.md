# Dependency Injection 

Angular 2 dependency injection is based on three components that are hierarchical in nature: 

1. *Injector* - this is the API that manages dependencies
2. *Provider* - this describes how dependencies are created
3. *Dependency* - this is the object type for the dependency

The injector by default creates singleton instances that are referenced throughout the application. A dependency can be overridden by a child component or explicitly requested using the `Injector` class. 

## Basics: A Number Generation Service 

1. Start a new project: 

`ng new dependency-injection` 

2. Change to the `dependency-injection` directory.

3. Create the number service: `ng g service number` 

4. Create a number component: `ng g component show-number` 

5. `code .` to launch the IDE 

6. Update `number.service.ts`: 


    import { Injectable } from '@angular/core';

    @Injectable()
    export class NumberService {

        private _number: number;

        constructor() {
            this._number = Math.floor(Math.random() * 100); 
        }

        public getNumber(): number {
            return this._number;
        }

    }

7. Import the number service to `app.module.ts`: 

`import { NumberService } from './number.service';`

8. Add the number service to the providers array for `@NgModule` in `.app.module.ts`: 

`providers: [NumberService],`

9. Update `show-number\show-number.component.ts`:


    import { Component, OnInit } from '@angular/core';
    import { NumberService } from '../number.service';

    @Component({
        selector: 'show-number',
        templateUrl: './show-number.component.html',
        styleUrls: ['./show-number.component.css']
    })
    export class ShowNumberComponent implements OnInit {

        public number: number;

        constructor(svc: NumberService) {
            this.number = svc.getNumber();
        }

        ngOnInit() {
        }
    }

10. Replace the HTML for `show-number\show-number.component.html`: 

`<h2>{{number}}</h2>`

11. Add the `show-number` directive three times to `app.component.html`:


    <h1>
        {{title}}
    </h1>
    <show-number></show-number>
    <show-number></show-number>
    <show-number></show-number>

12. Serve and access the website 



## Children: Creating a New Instance  

## Value: Configuration Injection 

## Factory: Conditional Creation 


## Mocking: Replacing the Instance
