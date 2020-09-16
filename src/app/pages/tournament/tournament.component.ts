import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Round, Tournament } from 'src/app/models';
import { Controller } from 'src/app/services/control/Controller.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  tournament:Tournament;
  roundList:Round[];

  constructor(private route: ActivatedRoute, private controller: Controller, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //todo preguntar por esto
      this.controller.getTournaments().then(res => {
        this.tournament = res.find(elem => elem.id === params.tournamentId)         
        if(!this.tournament){
          this.router.navigate(["/tournamentNotFound"])
          return;
        }
        this.controller.getRounds(this.tournament.id).then(res => {
          this.roundList = res;
          console.log(res);
          
        })
      });
    })
  }

}
