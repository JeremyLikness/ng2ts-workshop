# Data-binding 

You've already learned basic data-binding in the previous examples. To recap, There are basic ways to data-bind: 

* **{{Handlebars}}** evaluate the expression and produce output
* **[property bindings]** evaluate the expression and set the property to the result, or set a child value based on whether the expression is [style.class]="truthy" 
* **(event bindings)** evaluate the expression (such as calling a method on the component) when the event is raised

For two-way data-binding, the special `ngModel` object will both data-bind based on a property and raise an event when the corresponding DOM event is fired. For example, on the `input` tag it will perform two-way data-binding by moving the input value to the property and vice versa. 

`<input [(ngModel)]="property">` 

In this section, you'll learn how to address advanced scenarios when data flows from child components to parent components and vice versa. 

1. Create a new project `ng new data-binding` 

## Components 

1. Create a color component that shows a colored square:

`ng g component color` 

2. In `color\color.component.ts` create properties for red, green, and blue and initialize to a default value of 127:

3. Update `color\color.component.html` to data-bind the background:

4. Create a slider component that allows you to select a value: 

`ng g component slider` 

5. Update `slider\slider.component.ts` to expose a property for the value:

6. Update `slider\slider.component.html` to expose and data-bind the value:

7. Create a color-slider component that combines the first two components:

`ng g component color-slider` 

8. Create the properties for the colors in `color-slider\color-slider.component.ts` 

9. Try to data-bind the property to the child components in `color-slider\color-slider.component.html`: 

Notice you receive an error! This is because the properties weren't explicitly exposed for external data-binding, only internal data-binding between the components and their templates.

## Inputs 

Inputs allow you to specify what properties are available for data-binding. You can only data-bind to a property on the component that is exposed via the `@Input` decorator. 

1. Whenever you need to expose an `Input`, import it from `@angular/core`: 

2. Give the color component inputs for red, green, and blue properties: 

3. Give the slider component an input for the value:  

4. Save and re-run, and verify the data-binding now works across the child components. 

## Outputs 

## Detecting Changes 


