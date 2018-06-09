import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteComponent } from '../route';
import { TitleService } from '../../title.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOAD_GROUP_MATCHES } from '../../match-reducer';

const serverUrl = 'http://localhost:3301';

interface Match {
  date: string;
  team_home: {
    name: string;
    ioc: string;
    _id: string;
  };
  team_away: {
    name: string;
    ioc: string;
    _id: string;
  };
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent extends RouteComponent implements OnInit {
  matches: Match[];

  constructor(route: ActivatedRoute, titleService: TitleService, private store: Store<object>) {
    super(route, titleService);
    store.pipe(select('matches'), select('group_matches')).subscribe((matches$) => {
      this.matches = matches$;
    });
  }

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches() {
    this.store.dispatch({ type: LOAD_GROUP_MATCHES });
  }

  imageUrl(team) {
    if (team._id) {
      return `${serverUrl}/${team.ioc}.jpg`;
    } else {
      return `${serverUrl}/TEAM_PLACEHOLDER.png`;
    }
  }

  shouldDisplayDay(index) {
    if (index === 0) {
      return true;
    }

    const matchDay = this.matches[index].date.split('T')[0];
    const previousMatchDay = this.matches[index - 1].date.split('T')[0];

    if (matchDay !== previousMatchDay) {
      return true;
    }

    return false;
  }
}
