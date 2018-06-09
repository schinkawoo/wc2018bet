import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

enum ScreenSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  small = false;
  medium = false;
  large = false;
  value = null;
  sizes = ScreenSize;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      '(max-width: 768px)',
    ]).subscribe(result => {
      this.small = result.matches;
      if (this.small) {
        this.value = ScreenSize.SMALL;
      }
    });

    this.breakpointObserver.observe([
      '(min-width: 769px)',
      '(max-width: 1200px)',
    ]).subscribe(result => {
      this.medium = result.matches;
      if (this.medium) {
        this.value = ScreenSize.MEDIUM;
      }
    });

    this.breakpointObserver.observe([
      '(min-width: 1201px)',
    ]).subscribe(result => {
      this.large = result.matches;
      if (this.large) {
        this.value = ScreenSize.LARGE;
      }
    });
  }
}
