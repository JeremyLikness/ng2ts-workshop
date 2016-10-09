import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  private _timeout: number = 0;

  @Input('appFocusTimeout')
  public set timeout(val: number) {
    this._timeout = val; 
    setTimeout(() => {
      this.elem.nativeElement.focus();
    }, this._timeout);
  } 

  public get timeout(): number {
    return this._timeout; 
  }

  constructor(private elem: ElementRef) {
  }

}
