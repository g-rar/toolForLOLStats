import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player, Round, Team, Tournament } from 'src/app/models';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  //TODO remove title, add description, if user logged in give report capabilities
  //TODO add set edition (a set can have 0 games)

  tournament:Tournament;
  roundList:Round[];
  teams:Team[];
  activeTeam:Team = undefined;
  teamDisplayed = "(Todos)"
  participants:Player[] = [];
  displayParticipants:Player[] = [];
  editRoundsOverlay$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  editTeamsOverlay$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  editSetsOverlay$:BehaviorSubject<string> = new BehaviorSubject<string>("");  
  isLoggedIn = false;

  constructor(private route: ActivatedRoute, private controller: Controller, private router:Router, private toast: ToastService) {
  }

  ngOnInit(): void {
    this.controller.getLoggedUser().then(() => {
      this.isLoggedIn = true
    }).catch(err => {})
    this.route.params.subscribe(params => {
      this.controller.getTournament(params.tournamentId).then(res => {

        this.tournament = res;
        
        //rounds
        this.controller.getRounds(this.tournament.id).then(res => {
          this.roundList = res; 
        }).catch(error => {
          console.error(error)
        });

        //teams
        this.controller.getTeams(this.tournament.id).then(res => {
          this.teams = res
          this.teams.forEach(team => {
            this.participants = this.participants.concat(team.players)
          })          
          this.participants.sort((p1, p2) => p1.summonerName.localeCompare(p2.summonerName))
          this.displayParticipants = this.participants
        }).catch(error => {
          console.error(error);
        })

      }).catch(error =>{
        console.error(error);
        this.router.navigate(['/tournamentNotFound'])
      });
    })
  }

  selectTeam(t:Team){
    if(this.activeTeam === t){
      this.activeTeam = undefined;
      this.displayParticipants = this.participants
    } else {
      this.activeTeam = t;
      this.displayParticipants = t.players.sort((p1,p2) => p1.summonerName.localeCompare(p2.summonerName))
    }
  }

  playerClicked(p : Player) {
    this.router.navigate(['players/'+p.summonerName])
  }

  editTeams() {
    this.editTeamsOverlay$.next(true)
  }

  editRounds() {
    this.editRoundsOverlay$.next(true)
  }

  editSets(roundId: string){
    this.editSetsOverlay$.next(roundId)
  }

}
