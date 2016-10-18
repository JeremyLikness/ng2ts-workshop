import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  private _value: number;

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

  public get value(): number {
    return this._value;
  }

  constructor() { }

  ngOnInit() {
  }
}
