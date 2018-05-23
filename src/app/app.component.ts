import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webtec Betting';
  @ViewChild('drawer') drawer: MatDrawer;

  toggleDrawer() {
    if (localStorage.getItem('menuOpen') === 'false') {
      localStorage.setItem('menuOpen', 'true');
    } else {
      localStorage.setItem('menuOpen', 'false');
    }

    this.drawer.toggle();
  }

  isMenuOpen() {
    return localStorage.getItem('menuOpen') === 'false' ? false : true;
  }
}
