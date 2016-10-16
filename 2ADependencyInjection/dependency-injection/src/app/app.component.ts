import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject('maxNumber')maxNumber: number) {
    this.title = 'app works! max is: ' + maxNumber;
  }
  title = 'app works!';
}
