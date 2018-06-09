import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  @Output() toggleDrawer: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  close() {
    console.log('closing');
    this.toggleDrawer.emit(false);
  }

  open() {
    this.toggleDrawer.emit(true);
  }
}
