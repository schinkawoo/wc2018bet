import { Component, OnInit } from '@angular/core';
import { RouteComponent } from '../route';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../../title.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOAD_KNOCKOUT_MATCHES } from '../../match-reducer';

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
  round: string;
}

@Component({
  selector: 'app-knockout',
  templateUrl: './knockout.component.html',
  styleUrls: ['./knockout.component.css']
})
export class KnockoutComponent extends RouteComponent implements OnInit {
  matches: Match[];

  constructor(route: ActivatedRoute, titleService: TitleService, private store: Store<object>) {
    super(route, titleService);
    store.pipe(select('matches'), select('knockout_matches')).subscribe((matches$) => this.matches = matches$);
  }

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches() {
    this.store.dispatch({ type: LOAD_KNOCKOUT_MATCHES });
  }

  get16Matches() {
    return this.matches.slice(0, 8);
  }

  getQuaterFinalsMatches() {
    return this.matches.slice(8, 12);
  }

  getSemiFinalsMatches() {
    return this.matches.slice(12, 14);
  }

  getFinalsMatches() {
    return this.matches.slice(14);
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
