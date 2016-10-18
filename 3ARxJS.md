# Asynchronous with RxJS 

This lesson assumes you are already familiar with *promises*, or the API for handling asynchronous operations that allows you to reference a value that may not become available until some point in the future. 

RxJS, or [ReactiveX](http://reactivex.io/), is a library that implements a special combination of the observer and interator patterns to manage asynchronous streams. The library enables creating streams, composing streams, and listening to streams to respond. 

## Simple example 

1. Create a new project `ng new reactive` 

2. Create the file `assets\sample.txt` and add any content you like 

3. Generate a component `ng g component reader` 

4. Populate the HTML `reader\reader.component.html` with a simple dropdown and click action: 


    <select #selection>
        <option id="sample.dat" selected="selected">Bad File</option>
        <option id="sample.txt">Good File</option>
    </select>
    <button (click)="loadFile(selection.options[selection.selectedIndex].id)">Load</button>
    <p>{{result || 'Choose a file and click the load button'}}</p>

5. Edit the component code to issue an HTTP call and subscribe to the result:


    import { Component, OnInit } from '@angular/core';

    import { Http } from '@angular/http';

    @Component({
        selector: 'app-reader',
        templateUrl: './reader.component.html',
        styleUrls: ['./reader.component.css']
    })
    export class ReaderComponent implements OnInit {

        public result: string;

        constructor(private http: Http) { }

        public loadFile(fileName: string): void {
            this.http.get('assets/' + fileName)
            .subscribe(result => this.result = result.text(), error => this.result = error);
        }

        ngOnInit() {
        }

    }

6. Add the component to `app.component.html` 

`<app-reader></app-reader>`

7. Compile and run and observe the difference between selecting the file that is there and the file that is not. 

## Debouncing 

1. For a more complex stream, paste the following text to `assets\sample.txt`: 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ac nisi eget placerat. Nulla facilisi. Aliquam tristique ante sit amet dictum sollicitudin. Proin varius vehicula gravida. Fusce lectus metus, condimentum sed auctor in, dictum ac sem. Cras laoreet pulvinar nibh, sed luctus mi cursus sit amet. Praesent ultricies lobortis iaculis. Sed placerat lorem nec ultricies luctus. Donec quis dui faucibus ante egestas finibus. Nulla luctus tellus sed dapibus placerat. Mauris venenatis sollicitudin ornare. Cras dapibus, lectus eget consectetur dignissim, ipsum magna accumsan leo, ac volutpat lectus turpis ut nisl. Mauris quis justo nisl. Duis semper condimentum ullamcorper. Fusce tempus sapien id nunc dapibus, eget interdum arcu tristique.

2. Remove the button, and add an `input` tag to the top of the `reader\reader.component.html` markup: 


    <input #filter type="text" placeholder="enter filter" 
        (keyup)="loadFile(filter.value, selection.options[selection.selectedIndex].id)"/>

Update the default result text if you like.

3. Implement the function to filter words based on user input in `reader\reader.component.ts`: 

4. Notice that the filter is applied immediately as you type. Update the stream to debounce so that we: 

    4a. Don't filter until the user pauses typing 
    
    4b. Don't filter duplicate requests 

    4c. Ensure results come back in order 

5. Start typing and notice the difference 

## Polling 

1. You can create streams that poll on a regular interval. Create a service to return the current date `ng g service get-date` 

2. Place this code in `get-date.service.ts` 

3. Update `reader\reader.component.html` to show the list of times - note the use of the async pipe 

4. Place this code in `reader\reader.component.ts` 



