import { Injectable } from '@angular/core';

export interface INavItem {
  label: string;
  path: string;
  role?: number;
  icon?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  navItems: INavItem[] = [
    {path: '/', label: 'Home'},
    {path: '/users', label: 'Users'},
    {path: '/login', label: 'Login'},
  ];

  constructor() { }

  bootstrap(): () => void {
    return (): void => {
      console.log('startup process');
    };
  }
}
