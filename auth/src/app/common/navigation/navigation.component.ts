import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navItems$ = this.config.navItems$;
  user$ = this.authService.currentUser$;

  constructor(
    private config: ConfigService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.logout();
  }

}
