import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {

  private _number: number;

  constructor() {
    this._number = Math.floor(Math.random() * 100); 
   }

  public getNumber(): number {
    return this._number;
  }

}
