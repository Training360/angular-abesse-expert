import { Component, OnInit } from '@angular/core';
import flatten from 'lodash-es/flatten';
import difference from 'lodash-es/difference';
import cloneDeep from 'lodash-es/cloneDeep';
import { Lodash } from './decorator/lodash.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Lodash(['flatten', 'difference', 'cloneDeep'])
export class AppComponent implements OnInit {
  title = 'building';
  flatten: typeof flatten;
  difference: typeof difference;
  cloneDeep: typeof cloneDeep;

  constructor() {
  }

  ngOnInit(): void {
    const test = [1, 2, [4, 5]];
    console.log( this.flatten(test) );
/*
    const a1 = [1, 4, 7];
    const a2 = [1, 5, 7];
    console.log( difference(a1, a2) );

    const user = {
      name: 'Pistike',
      skills: [
        'eat',
        'drink',
        'play'
      ]
    };

    const user2 = cloneDeep(user);
    console.log(user, user2); */

  }

}
