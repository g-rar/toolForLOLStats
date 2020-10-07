import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Round, Tournament } from 'src/app/models';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  //TODO remove title, add description, if user logged in give report capabilities
  //TODO also add tournament round id to URL when redirecting to set

  tournament:Tournament;
  roundList:Round[];

  constructor(private route: ActivatedRoute, private controller: Controller, private router:Router, private toast: ToastService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.controller.getTournament(params.tournamentId).then(res => {
        this.tournament = res;
        this.controller.getRounds(this.tournament.id).then(res => {
          this.roundList = res; 
        }).catch(error => {
          console.error(error)
        })
      }).catch(error =>{
        console.error(error);
        this.router.navigate(['/tournamentNotFound'])
      });
    })
  }

}
