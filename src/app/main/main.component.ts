import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RiotComService } from '../services/riot-com.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nameTeam1 = "Equipo1";
  statsTeam1 = [];
  nameTeam2 = "Equipo2";
  statsTeam2 = [];

  matchForm;

  constructor(private formBuilder: FormBuilder, private riotCom: RiotComService) { 
    this.matchForm = this.formBuilder.group({
      apiKey: "",
      matchId: "",
    })
  }

  ngOnInit() {
  }

  onSubmit(formData){
    this.riotCom.consultMatch(formData.apiKey, formData.matchId).then((result) => {
      console.log(result);
      this.nameTeam1 = result.team1.name
      this.nameTeam2 = result.team2.name
      this.statsTeam1 = result.team1.playerStats
      this.statsTeam2 = result.team2.playerStats
    }).catch((error) => console.error(error));
  }

}
