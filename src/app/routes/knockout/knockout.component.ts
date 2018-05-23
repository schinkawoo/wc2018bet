import { Component, OnInit } from '@angular/core';
import { RouteComponent } from '../route';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-knockout',
  templateUrl: './knockout.component.html',
  styleUrls: ['./knockout.component.css']
})
export class KnockoutComponent extends RouteComponent {
  constructor(route: ActivatedRoute, titleService: TitleService) { super(route, titleService); }

}
