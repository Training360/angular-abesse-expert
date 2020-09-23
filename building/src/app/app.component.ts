import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterViewChecked {
  title = 'perf';
  users$: Observable<User[]> = this.http.get<User[]>('http://localhost:3000/users');

  time: number;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    const d = new Date();
    this.time = d.getTime();
  }

  ngAfterViewChecked(): void {
    const ms = new Date().getTime() - this.time;
    console.log('Elapsed time in milliseconds: ' + ms);
  }


}
