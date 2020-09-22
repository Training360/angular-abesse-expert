// tslint:disable: no-console
import { AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-fib-list',
  templateUrl: './fib-list.component.html',
  styleUrls: ['./fib-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FibListComponent implements OnInit, DoCheck, AfterViewChecked {

  @Input() list;
  @Input() title;
  @Input() type;

  cols = [
    {key: 'id', label: '#'},
    {key: 'first_name', label: 'Fname'},
  ];

  filterPhrase = '';

  constructor() { }

  ngOnInit(): void {
  }

  calculate(investor: User): number {
    return this.type === 'fibonacci'
      ? this.fibonacci(20)
      : this.grow(1000, 0.055, 5);
  }

  fibonacci(num): number {
    if (num <= 1) {
      return 1;
    }

    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

  grow(base: number, interest: number, years: number): number {
    base *= 1 + interest;
    years--;
    if (years) {
      return this.grow(base, interest, years);
    }
    return Math.round(base * 100) / 100;
  }

  ngDoCheck(): void {
    console.time('checking ' + this.type);
  }

  ngAfterViewChecked(): void {
    console.timeEnd('checking ' + this.type);
  }

}
