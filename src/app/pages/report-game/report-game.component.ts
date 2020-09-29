import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report-game',
  templateUrl: './report-game.component.html',
  styleUrls: ['./report-game.component.scss']
})
export class ReportGameComponent implements OnInit {

  //TODO rework like... all of this

  nameTeam1 = "Equipo1";
  statsTeam1 = [];
  nameTeam2 = "Equipo2";
  statsTeam2 = [];

  matchForm;

  constructor(private formBuilder: FormBuilder) { 
    this.matchForm = this.formBuilder.group({
      apiKey: "",
      matchId: "",
    })
  }

  ngOnInit() {
  }

  onSubmit(formData){
    console.log(formData);
    
    // this.riotCom.consultMatch(formData.apiKey, formData.matchId).then((result) => {
    //   console.log(result);
    //   this.nameTeam1 = result.team1.name
    //   this.nameTeam2 = result.team2.name
    //   this.statsTeam1 = result.team1.playerStats
    //   this.statsTeam2 = result.team2.playerStats
    // }).catch((error) => console.error(error));
  }

}
