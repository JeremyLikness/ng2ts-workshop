import { Component, OnInit, Inject } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'show-number',
  providers: [{provide: NumberService, 
    useFactory: (maxNumber) => {
      let numberService = new NumberService();
      numberService.maxNumber = maxNumber;
      return numberService;
    },
    deps: ['maxNumber'] 
  }],
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
