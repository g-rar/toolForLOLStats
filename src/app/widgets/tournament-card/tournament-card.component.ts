import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Tournament } from 'src/app/models';

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TournamentCardComponent implements OnInit {

  //TODO once tournaments have images, add supor for them.

  @Input() tournament:Tournament;
  hasStarted:boolean = false;
  hasFinished:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    if(this.tournament.endDate){
      this.hasFinished = true;
    }
    if(this.tournament.startDate < new Date()){
      this.hasStarted = true;
    }
  }
}
