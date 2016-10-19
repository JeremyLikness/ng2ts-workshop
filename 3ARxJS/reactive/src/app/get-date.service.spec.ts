/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDateService } from './get-date.service';

describe('Service: GetDate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDateService]
    });
  });

  it('should ...', inject([GetDateService], (service: GetDateService) => {
    expect(service).toBeTruthy();
  }));
});
