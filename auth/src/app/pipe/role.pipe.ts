import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: number): string {
    const roles = ['admin', 'editor', 'paraszt', 'unknown'];
    if ([1, 2, 3].indexOf(value) < 0) {
      return roles[3];
    }
    return roles[value - 1];
  }

}
