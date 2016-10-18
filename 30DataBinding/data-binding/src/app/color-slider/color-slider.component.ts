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
