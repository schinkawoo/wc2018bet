import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  constructor(public authService: AuthService, public drawer: DrawerService) {
  }

  ngOnInit() {
  }
}
