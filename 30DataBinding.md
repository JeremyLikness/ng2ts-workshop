# Data-binding 

You've already learned basic data-binding in the previous examples. To recap, There are basic ways to data-bind: 

* **{{Handlebars}}** evaluate the expression and produce output
* **[property bindings]** evaluate the expression and set the property to the result, or set a child value based on whether the expression is [style.class]="truthy" 
* **(event bindings)** evaluate the expression (such as calling a method on the component) when the event is raised

For two-way data-binding, the special `ngModel` object will both data-bind based on a property and raise an event when the corresponding DOM event is fired. For example, on the `input` tag it will perform two-way data-binding by moving the input value to the property and vice versa. 

`<input [(ngModel)]="property">` 

In this section, you'll learn how to address advanced scenarios when data flows from child components to parent components and vice versa. 

Create a new project `ng new data-binding` 

## Components 

1. Create a color component that shows a colored square:

    `ng g component color` 

2. Add this to `color\color.component.css`: 

    ```html
    div {
        width: 100px; 
        height: 100px; 
        border: solid 2px black; 
        background: white;
        margin: 5px;
        padding: 5px;
    }
```
3. In `color\color.component.ts` create properties for red, green, and blue and initialize to a default value of 127:

    ```TypeScript
    public red: number = 127;
    public green: number = 127;
    public blue: number = 127;
```
4. Update `color\color.component.html` to data-bind the background:

    ```html
    <div [style.background]="'rgb(' + red + ',' + green + ',' + blue + ')'">
    </div>
```
5. Create a slider component that allows you to select a value: 

    `ng g component slider` 
6. Update `slider\slider.component.ts` to expose a property for the value:

    ```TypeScript
public value: number = 0;
```
7. Update `slider\slider.component.html` to expose and data-bind the value:

    ```html
    <input type="range" [(ngModel)]="value" min="0" max="255"/>
    {{value}}
```
8. Create a color-slider component that combines the first two components:

    `ng g component color-slider` 
9. Create the properties for the colors in `color-slider\color-slider.component.ts`:

    ```TypeScript 
    public color: string = 'red'; 
    public colorValue: number = 127;
```
10. Try to data-bind the property to the child components in `color-slider\color-slider.component.html`: 

    ```html
    <h2>{{color}}</h2>
    <app-color [red]="colorValue" [green]="colorValue" [blue]="colorValue"></app-color> 
    <app-slider [value]="colorValue"></app-slider>
```
    Notice you receive an error (can't bind to 'red|green|blue' because it isn't a known property of 'app-color', etc.)! This is because the properties weren't explicitly exposed for external data-binding, only internal data-binding between the components and their templates. Go ahead and add the sliders to the main `app.component.html` anyway: 

    ```html
    <app-color-slider [color]="'red'"></app-color-slider>
    <app-color-slider [color]="'green'"></app-color-slider>
    <app-color-slider [color]="'blue'"></app-color-slider>
```
## Inputs 

Inputs allow you to specify what properties are available for data-binding. You can only data-bind to a property on the component that is exposed via the `@Input` decorator. 

1. Whenever you need to expose an `Input`, import it from `@angular/core`: 

    ```type
import { Component, OnInit, Input } from '@angular/core';
```
2. Give the color component inputs for red, green, and blue properties:     

    ```TypeScript
    @Input()
    public red: number = 127;

    @Input()
    public green: number = 127;

    @Input()
    public blue: number = 127;
```
3. Give the slider component an input for the values:  

    ```TypeScript
    @Input()
    public value: number = 0;
```
4. Give the color-slider component an input for its values: 

    ```TypeScript
    @Input()
    public color: string = 'red'; 

    @Input()
    public colorValue: number = 127;
```
5. Save and re-run, and verify the data-binding now works across the child components.

But there's a problem! When you change the value of the slider, you see the update in the text *within* the slider component. However, it doesn't appear to be updating the parent component because the shade of the square should change. How can this be fixed?  

## Outputs 

As you can see, the data-binding flows through inputs but is only one-way. To make it flow in the other direction, you must find a way for the child component to inform the parents. 

1. In the slider component, import `EventEmitter` and `Output` from `@angular/core` 

2. Refactor the component to use a getter and setter for the properties: 

    ```TypeScript
    private _value: number;
    
    public set value(val: number) {
        this._value = val;
    }

    public get value(): number {
        return this._value;
    }
```
    This way you can intercept whenever a change is passed into the value. 

3. Next, add an `EventEmitter` to raise a custom event whenever the value changes, and update the setter to use the event: 

    ```TypeScript
    @Output()
    public onValueChange: EventEmitter<number> = new EventEmitter<number>();

    @Input()
    public set value(val: number) {
        let change = val !== this._value;
        this._value = val;
        if (change) {
            this.onValueChange.emit(val);
        }
    }
```
4. Finally, listen to the event in `color\color-slider.html` and use it to refresh the value: 

    ```html
    <app-slider [value]="colorValue" (onValueChange)="colorValue=$event"></app-slider> 
```
    Compile and run the application, and you should see the shades of the squares change! Now let's roll these all up to a parent color component. 

5. Add an event to the color slider component: 

    ```TypeScript
    import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

    @Component({
        selector: 'app-color-slider',
        templateUrl: './color-slider.component.html',
        styleUrls: ['./color-slider.component.css']
    })
    export class ColorSliderComponent implements OnInit {

        private _colorValue: number = 127;

        @Output()
        public onColorValueChange: EventEmitter<number> = new EventEmitter<number>();

        @Input()
        public color: string = 'red'; 

        @Input()
        public set colorValue(val: number) {
            let change = val !== this._colorValue;
            this._colorValue = val; 
            if (change) {
                this.onColorValueChange.emit(val);
            }
        }

        public get colorValue(): number {
            return this._colorValue;
        }

        constructor() { }

        ngOnInit() {
        }

    }
```
6. Add red, green, and blue properties to `app.component.ts`:

    ```TypeScript 
    public red: number = 64;
    public green: number = 128; 
    public blue: number = 192; 
```
7. Finally, update `app.component.html` to interact between the three sliders and add a new color square. Enjoy! 

    ```html
    <h1>
        {{title}}
    </h1>
    <app-color [red]="red" [green]="green" [blue]="blue"></app-color>
    <app-color-slider [color]="'red'" [colorValue]="red" (onColorValueChange)="red=$event"></app-color-slider>
    <app-color-slider [color]="'green'" [colorValue]="green" (onColorValueChange)="green=$event"></app-color-slider>
    <app-color-slider [color]="'blue'" [colorValue]="blue" (onColorValueChange)="blue=$event"></app-color-slider>
```