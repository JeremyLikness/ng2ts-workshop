# Dependency Injection 

Angular 2 dependency injection is based on three components that are hierarchical in nature: 

1. **Injector** - this is the API that manages dependencies
2. **Provider** - this describes how dependencies are created
3. **Dependency** - this is the object type for the dependency

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

Notice that each number is the same. The components each get the same (singleton) copy of the service and therefore receive the same number.

## Children: Creating a New Instance  

In Angular 2, dependency injection is hierarchical. That means you can inject new instances. Open `show-number.component.ts` and add a `providers` declaration after the `selector` declaration: 

`providers: [NumberService],`

Save and let the app refresh. This time each number will be unique because a new version of the service is being created.

## Value: Configuration Injection 

Add a value for `maxNumber` to the `providers` declaration in `app.module.ts`: 

`providers: [NumberService, {provide: 'maxNumber', useValue: 50}],`

In `app.component` add a constructor that takes the value in. First, add `Inject` to the import statement: 

`import { Component, Inject } from '@angular/core';`

Next, add the constructor: 

    constructor(@Inject('maxNumber')maxNumber: number) {
        this.title = 'app works! max is: ' + maxNumber;
    }
  
Save and refresh the app. Verify the value was successfully injected. The `@Inject` attribute allows you to use the string tag for the dependency instead of a type, because `number` is too generic. 

## Factory: Conditional Creation 

Modify the number service to allow setting the max number and only generate numbers in the appropriate range: 

    import { Injectable } from '@angular/core';

    @Injectable()
    export class NumberService {

        private _number: number = null;
        public maxNumber: number = 100;

        public getNumber(): number {
            return this._number || 
            (this._number = Math.floor(Math.random() * this.maxNumber));
        }

    }

This approach "lazy loads" the number on the first call and uses the `maxNumber` property so it can be set after the service is constructed.

Note: you *could* use `Inject` and inject the max number into the constructor, because services also resolve their own dependencies, but this demo is intended to show you how you can use a factory method.

If you save and refresh the app at this point, the numbers generated are still between 0 and 100 despite the max value being set to 50. Let's fix that. In `show-number.component.ts` add `Inject` to the imports from `@angular/core` and then change the `providers` declaration to this: 

    providers: [{provide: NumberService, 
        useFactory: (maxNumber) => {
            let numberService = new NumberService();
            numberService.maxNumber = maxNumber;
            return numberService;
        },
        deps: ['maxNumber'] 
    }],

Refresh the app and you'll see the numbers generated are now in the range (go ahead and change the value to something small like 5 to see). Although this is a very contrived example, you should be able to see how a simple configuration value can be used to generate or configure dependencies as needed. For example, you could configure whether or not email services are available and return a "no op" class if they are not, or a class that interacts with an email service if they are. 

## Mocking: Replacing the Instance

Finally, the type simply designates the appropriate signature. You can easily mock the type by providing something different. Update the `providers` declaration for `show-number.component.ts` to this: 

`providers: [{provide: NumberService, useValue: { getNumber: () => 42 }}],`

Now refresh the app and you will find the number generated is always the [answer to the ultimate question of life, the universe, and everything](https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy).  