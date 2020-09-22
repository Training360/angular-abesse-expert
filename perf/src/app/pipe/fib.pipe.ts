import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';
import memo from 'memo-decorator';

const fibCalc = (num): number => {
  if (num <= 1) {
    return 1;
  }

  return fibCalc(num - 1) + fibCalc(num - 2);
};

const fibCache = new Map();

@Pipe({
  name: 'fib'
})
export class FibPipe implements PipeTransform {

  @memo({
    resolver: v => v % 20,
    cache: fibCache
  })
  transform(value: number): unknown {
    console.log(value, fibCache);
    return fibCalc(value % 20);
  }

}
