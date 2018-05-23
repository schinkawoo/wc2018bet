import { Component, OnInit, Input, Output, EventEmitter, Inject, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() title = 'Webtec Betting';
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter();
  constructor(private route: ActivatedRoute, private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.titleChanged.subscribe(title => {
      this.title = title;
    });
  }

  toggle() {
    this.toggleMenu.emit(null);
  }
}
