import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {

  private _number: number = null;
  public maxNumber: number = 100;

  public getNumber(): number {
    return this._number || 
     (this._number = Math.floor(Math.random() * this.maxNumber));
  }

}
