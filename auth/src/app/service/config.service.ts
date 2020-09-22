import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RolePipe } from '../pipe/role.pipe';

export interface INavItem {
  label: string;
  path: string;
  role?: number;
  icon?: number;
}

interface ITableColumn {
  title: string;
  key: string;
  type?: string;
  pipes?: PipeTransform[];
  pipeArgs?: any[][];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl = 'http://localhost:3000/';

  navItems: INavItem[] = [
    {path: '/', label: 'Home'},
    {path: '/users', label: 'Users'},
  ];

  navItems$: BehaviorSubject<INavItem[]> = new BehaviorSubject([]);
  userColumns$: BehaviorSubject<ITableColumn[]> = new BehaviorSubject([]);

  userColumns: ITableColumn[] = [
    {
      key: 'name',
      title: 'Name',
      pipes: [new UpperCasePipe()],
      pipeArgs: [[]]
    },
    {
      key: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      key: 'role',
      title: 'Role',
      pipes: [new RolePipe()],
      pipeArgs: [[]]
    },
  ];

  constructor(
    private http: HttpClient,
  ) { }

  bootstrap(): () => void {
    return (): void => {
      this.http.get<ConfigService>(`${this.apiUrl}settings`).subscribe(
        settings => {
          this.navItems$.next(settings.navItems);
          this.userColumns$.next(settings.userColumns);
        }
      );
    };
  }
}
