import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteComponent } from '../route';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent extends RouteComponent {
  constructor(route: ActivatedRoute, titleService: TitleService) { super(route, titleService); }
}
