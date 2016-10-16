import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'show-number',
  providers: [NumberService],
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
