import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'RxJs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements AfterViewInit {

  @ViewChild('filter')
  public inputElement: ElementRef;

  @ViewChild('selection')
  public selectElement: ElementRef;

  public result: string;

  constructor(private http: Http, private change: ChangeDetectorRef) { }

  public loadFile(filter: string, fileName: string): Observable<string> {
    return this.http.get('assets/' + fileName)
      .map(result => result.text().split(' ').filter(line => line.indexOf(filter) >= 0).join(' '));
  }

  ngAfterViewInit() {
    console.log('init');
    let select = this.selectElement.nativeElement as HTMLSelectElement;
    let input = this.inputElement.nativeElement as HTMLInputElement;
    let typing = Observable.fromEvent(input, 'keyup');
    typing.debounceTime(400).distinctUntilChanged().
      flatMap(filter => this.loadFile(input.value, select.options[select.selectedIndex].id))
      .subscribe(word => {
          this.result = word;
          this.change.detectChanges();
        }, err => this.result = err);
  }

}
