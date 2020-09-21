import { InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../model/user';
import { UserService } from './user.service';

const userFactory = (
  { params }: ActivatedRoute,
  userService: UserService,
): Observable<User | User[]> => {
  return params.pipe(
    switchMap(paramsObject => userService.read(paramsObject.id))
  );
};

// Token.
export const USER_INFO = new InjectionToken<Observable<User | User[]>>(
  'A stream with current user information.'
);

export const USER_PROVIDER: Provider[] = [
  {
    provide: USER_INFO,
    deps: [ActivatedRoute, UserService],
    useFactory: userFactory
  }
];
