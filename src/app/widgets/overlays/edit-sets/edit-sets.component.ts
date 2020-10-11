import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Round, Set, Team, Tournament } from 'src/app/models';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-edit-sets',
  templateUrl: './edit-sets.component.html',
  styleUrls: ['./edit-sets.component.scss']
})
export class EditSetsComponent implements OnInit {

  @Input() showOverlay$ : BehaviorSubject<string>
  @Input() tournament : Tournament
  @Input() rounds : Round[]
  @Input() teams : Team[]
  actualRound: Round
  selectedTeam1:string
  selectedTeam2:string
  disableAddition:boolean = false

  setsCopy:any[]=[]
  deletedIds:string[]=[]
  roundId: string
  showOverlay = false

  constructor(private controller:Controller, private toast:ToastService) { }

  ngOnInit(): void {
    this.showOverlay$.subscribe(val => {
      this.setsCopy = []
      if(val === ""){
        this.showOverlay = false
      } else {
        if(this.teams.length < 2) {
          this.toast.showToast({
            text: "Necesitas al menos dos equipos para empezar a ingresar sets.",
            delay: 4000
          })
          this.disableAddition = true
          this.teams = []
        } else {
          this.selectedTeam1 = this.teams[0].id
          this.selectedTeam2 = this.teams[1].id        
        }
        this.roundId = val
        this.showOverlay = true;
        this.actualRound = this.rounds.find( r => r.id === this.roundId)
        this.actualRound.sets.forEach(s => {
          this.setsCopy.push({...s})
        })
      }
    })
  }

  remove(set:Set) {
    if(set.matchIds.length !== 0){
      this.toast.showToast({
        title:"Algo anda mal", 
        text: "No se pueden borrar Sets con Matches registrados", 
        type:"danger",
        delay: 4000
      })
      return;
    }
    this.setsCopy.splice(this.setsCopy.findIndex(s => s.id === set.id), 1)
    //only can be deleted if it was added previously
    if(this.actualRound.sets.find(s => s.id === set.id)){
      this.deletedIds.push(set.id)
    }
  }

  hide() {
    this.showOverlay$.next("")
  }

  async saveState(){
    //delete those that where deleted
    this.deletedIds.forEach(async id => {
      await this.controller.deleteSet(this.tournament.id, this.roundId, id)
    })
    //TODO adding and renaming sets
    this.setsCopy.forEach(async set => {
      if(set.new){
        await this.controller.addSet(this.tournament.id, this.actualRound.id, set.firstTeamResult.teamId, set.secondTeamResult.teamId)
      }
    })
    this.hide()
  }

  addSet() {
    if(this.selectedTeam1 === this.selectedTeam2){
      this.toast.showErrorToast({text:"Un equipo no puede enfrentarse a sí mismo.",title:"Algo está mal 🤔", delay:4000})
      return;
    }
    let team1 = this.teams.find(t => t.id === this.selectedTeam1)
    let team2 = this.teams.find(t => t.id === this.selectedTeam2)
    this.setsCopy.push({
      firstTeamResult: {teamName: team1.name, teamId: team1.id, score: 0},
      secondTeamResult: {teamName: team2.name, teamId: team2.id, score: 0},
      new: true
    })
  }
}
