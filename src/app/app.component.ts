import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { ScreenService } from './screen.service';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Webtec Betting';
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(public screen: ScreenService, private drawerService: DrawerService) {
  }

  ngOnInit() {
    this.drawerService.toggleDrawer.subscribe((open) => {
      if (!this.screen.large && !open) {
        this.drawer.close();
      } else if (open) {
        this.drawer.open();
      }
    });
  }

  toggleDrawer() {
    if (!this.screen.large) {
      this.drawer.toggle();
    }
  }

  isMenuOpen() {
    if (this.screen.large) {
      return true;
    } else {
      return false;
    }
  }
}
