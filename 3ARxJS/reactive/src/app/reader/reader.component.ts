import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  public result: string;

  constructor(private http: Http) { }

  public loadFile(filter: string, fileName: string): void {
    this.http.get('assets/' + fileName)
      .subscribe(result =>
        this.result = result.text().split(' ').filter(line => line.indexOf(filter) >= 0).join(' '),
        error => this.result = error);
  }

  ngOnInit() {
  }

}
