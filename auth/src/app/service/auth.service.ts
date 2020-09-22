import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userObjectName = 'currentUser';
  private currentUserSubject$: BehaviorSubject<User> = new BehaviorSubject(null);
  currentUser$: Observable<User> = this.currentUserSubject$.asObservable();
  currentUserValue: User = this.currentUserSubject$.value;
  lastToken = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private config: ConfigService,
  ) {
    const localUser = localStorage.getItem(this.userObjectName);
    if (localUser) {
      const user: User = JSON.parse(localUser);
      this.currentUserSubject$.next(user);
    }
  }

  login(loginData: User): Observable<{accessToken: string}> {
    return this.http.post<{accessToken: string}>(
      `${this.config.apiUrl}login`,
      {email: loginData.email, password: loginData.password}
    ).pipe(
      switchMap( response => {
        if (response.accessToken) {
          this.lastToken = response.accessToken;
          return this.userService.query(`email=${loginData.email}`);
        }
        return of(null);
      }),
      tap( user => {
        if (!user) {
          localStorage.removeItem(this.userObjectName);
          this.currentUserSubject$.next(null);
        } else {
          user[0].token = this.lastToken;
          localStorage.setItem(this.userObjectName, JSON.stringify(user[0]));
          this.currentUserSubject$.next(user[0]);
        }
      })
    )
  }
}
