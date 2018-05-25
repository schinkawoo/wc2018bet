import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../../title.service';
import { RouteComponent } from '../route';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent extends RouteComponent {

  constructor(route: ActivatedRoute, titleService: TitleService) { super(route, titleService); }
}
