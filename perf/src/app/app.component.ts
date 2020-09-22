import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'perf';
  users: User[] = [];

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      users => this.users = users
    );
  }
}
