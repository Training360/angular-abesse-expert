import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

const fibCalc = (num): number => {
  if (num <= 1) {
    return 1;
  }

  return fibCalc(num - 1) + fibCalc(num - 2);
};

@Pipe({
  name: 'fib'
})
export class FibPipe implements PipeTransform {

  transform(value: User): unknown {
    return fibCalc(value.id % 20);
  }

}
