import { Component, OnInit } from '@angular/core';
import { Player, PlayerOverallStats } from 'src/app/models';
import { Controller } from 'src/app/services/control/Controller.service';

/** 
 * @todo Component should display the overall stats of a player and also display a list of recently used champ which can redirect to champs component
 */
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  //TODO build this

  stats : PlayerOverallStats
  player :  Player

  constructor(private controller:Controller) {
    controller.getPlayerStats().then(res => {
      this.stats = res[0]
      
    });
  }

  ngOnInit(): void {
  }

}
