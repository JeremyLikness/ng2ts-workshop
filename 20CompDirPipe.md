# Understanding Components, Directives, and Pipes 

Start with a new project. It is recommended you copy and paste an existing lab (`connect-ts-ng2`) to avoid the long start-up time associated with the `ng new` command. Once you have your project ready, navigate to the root folder.

## Components 

Create your first component: 

`ng g component experiment` 

Note the folder and files that are generated under `src/app`. 

Start the app: `ng serve` 

If your browser isn't already open, navigate to [http://localhost:4200](http://localhost:4200)

Launch Visual Studio Code: `code .` 

Edit `src/app/app.component.html` and add the following to the end: 

`<app-experiment></app-experiment>` 

Save and the web page should refresh and show "experiment works!" 

### CSS 

Let's set some CSS for the component to use. Open `experiment.component.css` and add the following: 

```css
    :host {
        font-family: Arial, Helvetica, sans-serif
    }

    div {
        width: 100px; 
        height: 100px; 
    }

    div.red {
        background: lightcoral; 
        border: solid red 2px;
    }

    div.green {
        background: lightgreen;
        border: solid green 2px; 
    }
```

Save it. 

### Templates 

Components always have templates. Start with a simple template to see some of Angular 2's built-in features. Open `experiment.component.html` and add the following (save after each step to watch the page refresh)

1. Add a normal `div` and see how it takes on the CSS style. Also note we used the special `:host` selector in the CSS file to set a style at the parent level, thus formatting all of the children to use the `sans-serif` font family. 
    ```html
    <div>Normal div</div>
```
2. Add another div and explicitly set the `class` property using an attribute: 
    ```html
    <div class="red">Red Div</div>
```
3. Use square braces to bind to any property. Add the following snippet, save it, and click inside the "clickable" div. 
    ```html
    <div [innerText]="'Clickable'" [class.red]="red" [class.green]="!red" (click)="red=!red"></div>
```
A few things are going on here. The `innerText` property was bound to the string literal "clickable" which is why the word is in quotes. When the square braces exist, the value should be an expression. In the case of `class.red` Angular 2 will add or remove the class based on whether the expression is true. Notice a similar expression is set for the `class.green` so they will toggle. A curved brace (parenthesis) is used to bind to any event. In the example, the `click` event triggers an expression that flips the value `red`. Normally, you would define properties in the code for the controller, but here we reference the `red` variable. At first it is `undefined` which is why the `div` is green, but once clicked it gets set to a value and toggles back and forth. 
4. Now add the following and save:
    ```html
    <p #connector>Some text</p>
    <input type="text" #myInput (keyup)="connector.innerText=myInput.value"/>
```
The `#` symbol references a local variable that is scoped to the DOM element. So, in this example, `#connector` creates a local variable `connector` that references the `p` DOM element. In the input box, the `keyup` event is used to copy the value of the input box, referenced as `myInput`, to the inner text of the `p` tag. This isn't data-binding, but shows how Angular enables direct DOM manipulation. 
5. Now add this: 
    ```html
    <p>{{data}}</p>
    <input type="text" [(ngModel)]="data"/>
```
This behaves the same way, but sets up data-binding with a property named `data`. The special square and curved around `ngModel` indicate two-way data binding. The parenthesis trigger the event the associated element updates the binding and pushes its value to the model. The square braces trigger the data-binding to receive the value from the model. 
6. Add the following two lines and save. Nothing will happen just yet.
    ```html
    <p>{{componentData}}</p>
    <p #componentReferenced></p>
```
### Component 

Open the component's code `experiment.component.ts`. By default, it is using the `OnInit` [component lifecycle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html). These hooks enable you to trigger code at various points in the component's lifecycle. Use `ngOnInit` to initialize the data. First, add this variable to the class: 
```TypeScript
public componentData: string = 'Initializing...';
```
Now update the method to set the variable: 

```JavaScript
    ngOnInit() {
        this.componentData = 'Initialized.';
    }
```

Save and let the browser refresh, and you should see the value appear. The curly braces in `{{componentData}}` specify a one-way data-binding to the corresponding property on the component. The component may also access elements in its template without using jQuery or any other type of selector. The last `p` element has a local variable. These steps will access that DOM element from the component: 

First, update the `import` statement to include both:
```TypeScript
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';` 
```
Add a property of type `ElementRef` and use the `ViewChild` attribute to map it to the template. 

```TypeScript
    @ViewChild('componentReferenced')
    public element: ElementRef;
```

The parameter passed to `ViewChild` is the local variable used to tag the element in the template. This will set the `element` property on the component (optionally, you can give the property and the local variable the same name). 

Now access the element inside the `ngOnInit` method: 
```TypeScript
(this.element.nativeElement as HTMLParagraphElement).innerHTML = '<b>From Within</b>';`
```
Save, refresh, and see how you were able to populate the DOM element directly. 

## Directives 

Components always have associated templates. Directives apply behaviors to elements but do not have templates of their own. 

1. Generate the directive `ng g directive focus` 
2. Open `app.module.ts` and note how the directive was added to the module for you, along with the component you previously created. 
3. Open `focus.directive.ts` and import `ElementRef` from `@angular/core` 
4. Inject the element the directive is associated with in the constructor, then use a timeout to set the focus in the next event loop: 
    ```TypeScript
    constructor(private elem: ElementRef) {
        setTimeout(() => this.elem.nativeElement.focus(), 0);
    }
```
5. Open `experiment.component.html` and use the directive on the second `input` tag: 
    ```html
    <input appFocus type="text" [(ngModel)]="data"/>`
```
6. Save and allow the browser to refresh. It should automatically set focus to the second `input` tag so you can begin typing right away.
7. Import `Input` from `@angular/core` in `focus.directive.ts`
8. Update the directive to support a parameter. The code should be changed to: 
    ```TypeScript
    export class FocusDirective {

        private _timeout: number = 0;

        @Input('appFocusTimeout')
        public set timeout(val: number) {
            this._timeout = val; 
            setTimeout(() => {
                this.elem.nativeElement.focus();
            }, this._timeout);
        } 

        public get timeout(): number {
            return this._timeout; 
        }

        constructor(private elem: ElementRef) {
        }

    }
```
9. Update `experiment.component.html` to use the parameter: 
    ```html
    <input appFocus [appFocusTimeout]="2000" type="text" [(ngModel)]="data"/>`
```
10. Save and notice the 2 second delay before focus is set 
*Note*: If you the focus doesn't appear to be set, it may be because you have the console open. Click inside the browser window (outside of the console) and refresh to see the behavior work. 

## Pipes 
Pipes provide simple data transformations. 

1. Add a property to `experiment.component.ts` with a date: 
    ```TypeScript
public dateProperty: Date = new Date(); 
```
2. Add the following to the end of `experiment.component.html`: 
    ```html
    <p>{{dateProperty}}</p>
    <p>{{dateProperty|date}}</p>
    <p>{{dateProperty|date:'shortDate'}}</p>
```
3. Save and note the different dates when the browser refreshes 
4. Create a pipe: `ng g pipe reverse` 
5. Open `reverse.pipe.ts` and update the code to reflect the following: 
    ```TypeScript
    export class ReversePipe implements PipeTransform {

        transform(value: string, substr?: number): any {
            let result = value && value.length ? value.toString().split('').reverse().join('') : value; 
            if (substr && substr === Number(substr)) {
            let len = Number(substr);
            if (result && result.length && len < result.length) {
                return result.substring(0, len);
            } 
            }
            return result; 
        }

    }
```
6. Modify the `p` data-binding to `data` in `experiment.component.html` to use the pipe: 
    ```html
<p>{{data|reverse:20}}</p>
```
7. Save and begin typing when the browser refreshes and the second input box receives focus. Watch the effect. 