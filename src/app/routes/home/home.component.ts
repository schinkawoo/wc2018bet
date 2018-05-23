import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteComponent } from '../route';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends RouteComponent implements OnInit {
  constructor(route: ActivatedRoute, titleService: TitleService) { super(route, titleService); }

}
