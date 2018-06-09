import { Component, OnInit, Input } from '@angular/core';
import { ScreenService } from '../../../screen.service';

const serverUrl = 'http://localhost:3301';

export interface Team {
  ioc: string;
  name: string;
}

@Component({
  selector: 'app-knockout-match',
  templateUrl: './knockout-match.component.html',
  styleUrls: ['./knockout-match.component.css']
})
export class KnockoutMatchComponent implements OnInit {
  @Input() data;
  constructor(public screen: ScreenService) { }

  ngOnInit() {
  }

  getTeamName(team: Team) {
    if (this.screen.large) {
      return team.name;
    } else {
      return team.ioc ? team.ioc : team.name;
    }
  }

  imageUrl(team) {
    if (team._id) {
      return `${serverUrl}/${team.ioc}.jpg`;
    } else {
      return `${serverUrl}/TEAM_PLACEHOLDER.png`;
    }
  }
}
