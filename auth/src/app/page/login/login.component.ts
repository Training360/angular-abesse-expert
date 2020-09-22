import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.userService.update({id: 1, password: 'abesse'}),
      this.userService.update({id: 2, password: 'abesse'}),
      this.userService.update({id: 3, password: 'abesse'}),
    ]).subscribe(
      resp => console.log(resp)
    );
  }

  onLogin(ngForm: NgForm): void {
    this.authService.login(ngForm.value).subscribe(
      () => this.router.navigate(['/']),
      err => this.errorMessage = err.error
    );
  }

}
