import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grow'
})
export class GrowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
