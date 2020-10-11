import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tournament, Round, Team } from 'src/app/models';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.scss']
})
export class EditTeamsComponent implements OnInit {

  @Input() showOverlay$ : BehaviorSubject<boolean>;
  @Input() tournament : Tournament;
  @Input() teams:Team[] = []
  teamsCopy:any[] = []
  deletedIds:string[] = []
  newTeam:string = "";
  showOverlay = false;
  added = 0;

  constructor(private controller:Controller, private toast:ToastService) {
  }
  
  ngOnInit(): void {
    this.showOverlay$.subscribe(val => {
      this.showOverlay = val
    })
    this.teams.forEach(t => {
      this.teamsCopy.push({...t} as Team)
    })
  }

  hide() {
    this.showOverlay$.next(false);
    this.reset()
  }

  addTeam() {
    if(this.newTeam === ""){
      this.toast.showToast({
        title:"Algo anda mal", 
        text: "No se pueden meter Equipos sin nombre", 
        type:"danger",
        delay: 4000
      })
      return;
    }
    if(this.teamsCopy.find(t => t.name === this.newTeam)){
      this.toast.showToast({
        title:"Algo anda mal", 
        text: "No se pueden meter dos Equipos con el mismo nombre", 
        type:"danger",
        delay: 4000
      })
      return;
    }
    let newTeam = {name: this.newTeam, id: "new"+this.added}
    this.teamsCopy.push(newTeam)
    this.added++;
    this.newTeam = "";
  }

  remove(tm) { 
    if(tm.players && tm.players.length != 0){
      this.toast.showToast({
        title:"Algo anda mal", 
        text: "No se pueden remover Equipos con Jugadores registrados", 
        type:"danger",
        delay: 4000
      })
      return;
    } 
      
    if(this.teams.find(t => t.id === tm.id)){
      this.toast.showToast({title:"TODO",text:"Right now you can't delete teams", type:"notification", delay: 3500})
      // this.deletedIds.push(tm.id)
      // this.teamsCopy.splice(this.teamsCopy.findIndex(t => t.name === tm.name),1)
    } else {
      this.teamsCopy.splice(this.teamsCopy.findIndex(t => t.name === tm.name),1)
    }
  }

  async saveTeams() {
    this.toast.showToast({text:"Guardando modificaciones. Espere un momento.", title:"💾 Guardando", delay: 5000})
    //TODO improve this
    for(let i = 0 ; i < this.teamsCopy.length ; i++){
      //if round existed previously with a different name and has no sets
      let originalTeam = this.teams.find(t => 
        t.id === this.teamsCopy[i].id 
        // && t.name !== this.teamsCopy[i].name
      );
      // if(originalTeam && originalTeam.players.length !== 0){
      //   //TODO request for editing objects so this is more possible 
      //   //TODO request for deleting teams
      //   await this.controller.addTeam(this.tournament.id, originalRound.id)
      //   await this.controller.addRound(this.tournament.id, this.roundsCopy[i].name)
      
      // } else 
      if (!originalTeam && !this.teamsCopy[i].sets){
        //if its a new team, it won't have players, needs to be added
        await this.controller.addTeam(this.tournament.id, this.teamsCopy[i].name)
      }
    }
    //remove deleted teams
    // this.deletedIds.forEach( id => {})

    this.toast.showToast({
      text:"Cambios guardados. Es posible que tengas que recargar la página.",
      title:"💾✅ Completado",
      type:"notification"
    })

    this.hide()
  }
  
  reset() {
    this.teamsCopy = [];
    this.teams.forEach(tm => {
      this.teamsCopy.push({...tm} as Team)
    })  
  }
}
