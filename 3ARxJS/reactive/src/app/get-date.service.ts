import { Injectable } from '@angular/core';
import { Observable } from 'RxJs';

@Injectable()
export class GetDateService {

  constructor() { }

  public getDate(): Observable<Date> {
    return Observable.from([new Date()]);
  }

}
