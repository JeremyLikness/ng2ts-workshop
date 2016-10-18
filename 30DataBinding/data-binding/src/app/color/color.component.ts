import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input()
  public red: number = 127;

  @Input()
  public green: number = 127;

  @Input()
  public blue: number = 127;

  constructor() { }

  ngOnInit() {
  }

}
