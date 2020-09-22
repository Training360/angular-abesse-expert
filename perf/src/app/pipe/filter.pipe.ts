import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], phrase: string, tick: number): unknown {
    phrase = phrase.toLowerCase();
    return value.filter( item => {
      return item.first_name.toLowerCase().includes(phrase);
    });
  }

}
