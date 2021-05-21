import { Component, Input, OnInit } from '@angular/core';
import { PlayerOverallStats } from 'src/app/models';

@Component({
  selector: 'app-lol-player-stats',
  templateUrl: './lol-player-stats.component.html',
  styleUrls: ['./lol-player-stats.component.scss']
})
export class LolPlayerStatsComponent implements OnInit {

  @Input() stats : PlayerOverallStats;
  statsStr : string;

  constructor() { }

  ngOnInit(): void {
    this.statsStr = JSON.stringify(this.stats, null, 4)
  }

}
