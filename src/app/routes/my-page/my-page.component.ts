import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../../title.service';
import { RouteComponent } from '../route';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent extends RouteComponent {
  constructor(route: ActivatedRoute, titleService: TitleService) { super(route, titleService); }
}
