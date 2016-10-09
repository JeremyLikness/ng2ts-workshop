import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, substr?: number): any {
    let result = value && value.length ? value.toString().split('').reverse().join('') : value; 
    if (substr && substr === Number(substr)) {
      let len = Number(substr);
      if (result && result.length && len < result.length) {
        return result.substring(0, len);
      } 
    }
    return result; 
  }

}
