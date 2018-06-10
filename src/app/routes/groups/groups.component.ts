import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteComponent } from '../route';
import { TitleService } from '../../title.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOAD_GROUP_MATCHES } from '../../match-reducer';

const serverUrl = 'http://localhost:3301';

interface Team {
  name: string;
  ioc: string;
  _id: string;
}

interface Match {
  date: string;
  team_home: Team;
  team_away: Team;
  group: string;
  winner: string;
  result: {
    home: number,
    away: number
  };
}

class TeamGroupData {
  points = 0;
  win = 0;
  draw = 0;
  loose = 0;
  goalsFor = 0;
  goalsAgainst = 0;

  constructor(public team: Team) { }
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent extends RouteComponent implements OnInit {
  matches: Match[];
  groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  columns = ['country', 'win', 'draw', 'loose', 'goalsFor', 'goalsAgainst', 'points'];

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

  groupMatches(group: string) {
    return this.matches.filter(match => match.group === group);
  }

  groupData(group: string) {
    if (!this.matches || this.matches.length === 0) {
      return [];
    }

    const groupData = this.groupMatches(group).reduce((acc, match) => {
      acc = match.team_home._id in acc ? acc : { ...acc, [match.team_home._id]: new TeamGroupData(match.team_home) };
      acc = match.team_away._id in acc ? acc : { ...acc, [match.team_away._id]: new TeamGroupData(match.team_away) };

      if (match.winner) {
        switch (match.winner) {
          case match.team_home._id:
            acc[match.team_home._id].points += 3;
            acc[match.team_home._id].win += 1;
            acc[match.team_away._id].loose += 1;
            break;
          case match.team_away._id:
            acc[match.team_away._id].points += 3;
            acc[match.team_away._id].win += 1;
            acc[match.team_home._id].loose += 1;
            break;
          case 'DRAW':
            acc[match.team_home._id].points += 1;
            acc[match.team_home._id].draw += 1;
            acc[match.team_away._id].points += 1;
            acc[match.team_away._id].draw += 1;
        }
      }

      if (match.winner && match.result) {
        acc[match.team_home._id].goalsFor += match.result.home;
        acc[match.team_home._id].goalsAgainst += match.result.away;
        acc[match.team_away._id].goalsFor += match.result.home;
        acc[match.team_away._id].goalsAgainst += match.result.away;
      }

      return acc;
    }, {});
    return Object.values(groupData);
  }
}
