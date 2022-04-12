import { Component, OnInit } from '@angular/core';
import { IProTeam } from '../interfaces/pro-team';
@Component({
  selector: 'app-proteams',
  templateUrl: './proteams.component.html',
  styleUrls: ['./proteams.component.scss']
})
export class ProteamsComponent implements OnInit {

  showImage: boolean = false;
  title:string="Pro Teams";

  private _listFilter: string = '';
  constructor() {}

  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('setting list filter value for Pro Teams to: ', value);
    this.filteredTeams = this.filterThem(value);
  }
  filterThem(listFilter: string): IProTeam[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.proTeams.filter((team: IProTeam) =>
      team.proTeamName.toLocaleLowerCase().includes(listFilter)
    );
  }
  togglePics(){
    if(this.showImage){
      this.showImage=false;
      console.log("ShowImage should be false now")
    }
    else if(!this.showImage){
      this.showImage=true;
      console.log("clicked togglePics again, showImage set to true.");
    }

  }

  ngOnInit(): void {
    this.listFilter = '';
  }

  filteredTeams: IProTeam[] = [];
  proTeams: IProTeam[] = [
    {
      id: 1,
      abbr: 'BUF',
      proTeamName: 'Buffalo Bills',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 2,
      abbr: 'IND',
      proTeamName: 'Indianapolis Colts',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 3,
      abbr: 'MIA',
      proTeamName: 'Miami Dolphins',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 4,
      abbr: 'NE',
      proTeamName: 'New England Patriots',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 5,
      abbr: 'NYJ',
      proTeamName: 'New York Jets',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 6,
      abbr: 'CIN',
      proTeamName: 'Cincinnati Bengals',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 7,
      abbr: 'CLE',
      proTeamName: 'Cleveland Browns',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 8,
      abbr: 'TEN',
      proTeamName: 'Tennessee Titans',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 9,
      abbr: 'PIT',
      proTeamName: 'Pittsburgh Steelers',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 10,
      abbr: 'DEN',
      proTeamName: 'Denver Broncos',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 11,
      abbr: 'KC',
      proTeamName: 'Kansas City Chiefs',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 12,
      abbr: 'LV',
      proTeamName: 'Las Vegas Raiders',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 13,
      abbr: 'LAC',
      proTeamName: 'Los Angeles Chargers',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 14,
      abbr: 'SEA',
      proTeamName: 'Seattle Seahawks',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 15,
      abbr: 'DAL',
      proTeamName: 'Dallas Cowboys',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 16,
      abbr: 'NYG',
      proTeamName: 'New York Giants',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 17,
      abbr: 'PHI',
      proTeamName: 'Philadelphia Eagles',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 18,
      abbr: 'ARI',
      proTeamName: 'Arizona Cardinals',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 19,
      abbr: 'WAS',
      proTeamName: 'Washington Redskins',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 20,
      abbr: 'CHI',
      proTeamName: 'Chicago Bears',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 21,
      abbr: 'DET',
      proTeamName: 'Detroit Lions',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 22,
      abbr: 'GB',
      proTeamName: 'Green Bay Packers',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 23,
      abbr: 'MIN',
      proTeamName: 'Minnesota Vikings',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 24,
      abbr: 'TB',
      proTeamName: 'Tampa Bay Buccaneers',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 25,
      abbr: 'ATL',
      proTeamName: 'Atlanta Falcons',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 26,
      abbr: 'NAR',
      proTeamName: 'Los Angeles Rams',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 27,
      abbr: 'NO',
      proTeamName: 'New Orleans Saints',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 28,
      abbr: 'SF',
      proTeamName: 'San Francisco 49ers',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 29,
      abbr: 'CAR',
      proTeamName: 'Carolina Panthers',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 30,
      abbr: 'JAX',
      proTeamName: 'Jacksonville Jaguars',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 31,
      abbr: 'BAL',
      proTeamName: 'Baltimore Ravens',
      picpath: '../../assets/images/players.jpg',
    },
    {
      id: 32,
      abbr: 'HOU',
      proTeamName: 'Houston Texans',
      picpath: '../../assets/images/players.jpg',
    },
  ];
}
