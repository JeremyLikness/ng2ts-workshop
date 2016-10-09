import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  public componentData: string = 'Initializing...';
  public dateProperty: Date = new Date();

  @ViewChild('componentReferenced')
  public element: ElementRef;

  constructor() { }

  ngOnInit() {
    this.componentData = 'Initialized.';
    (this.element.nativeElement as HTMLParagraphElement).innerHTML = '<b>From Within</b>';
  }

}
