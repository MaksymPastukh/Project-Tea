import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLimit'
})
export class StringLimitPipe implements PipeTransform {

  transform(value: string, limit = 250, ellipsis = '...'): string {
    if(value.length <= limit) {
      return value
    }
    return value.substring(0, limit) + ellipsis
  }

}
