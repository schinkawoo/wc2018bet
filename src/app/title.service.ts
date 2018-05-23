import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  @Output() titleChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }
  setTitle(title: string) {
    this.titleChanged.emit(title);
  }
}
