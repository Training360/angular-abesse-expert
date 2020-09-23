import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'perf';
  users$: Observable<User[]> = this.http.get<User[]>('http://localhost:3000/users');

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {}
}
