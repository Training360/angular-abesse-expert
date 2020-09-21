import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { USER_INFO, USER_PROVIDER } from 'src/app/service/user-provider';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [USER_PROVIDER]
})
export class UserEditComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(USER_INFO) public user$: Observable<User>,
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

}
