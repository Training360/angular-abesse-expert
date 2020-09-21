import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navItems = this.config.navItems;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
