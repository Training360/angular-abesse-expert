import { UpperCasePipe } from '@angular/common';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
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
    {path: '/login', label: 'Login'},
  ];

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

  constructor() { }

  bootstrap(): () => void {
    return (): void => {
      console.log('startup process');
    };
  }
}
