import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Round, Tournament } from 'src/app/models';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-edit-rounds',
  templateUrl: './edit-rounds.component.html',
  styleUrls: ['./edit-rounds.component.scss']
})
export class EditRoundsComponent implements OnInit {

  @Input() showOverlay$ : BehaviorSubject<boolean>;
  @Input() tournament : Tournament;
  @Input() rounds:Round[];
  roundsCopy:any[] = [];
  deletedIds:string[] = [];
  showOverlay = false;
  newRound:string = "";
  added = 0;

  constructor(private controller:Controller, private toast:ToastService) {
  }
  
  ngOnInit(): void {
    this.showOverlay$.subscribe(val => {
      this.showOverlay = val
    })
    
    this.rounds.forEach(rnd => {
      this.roundsCopy.push({...rnd} as Round)
    })
  }

  hide() {
    this.showOverlay$.next(false);
  }

  addRound() {
    if(this.newRound === ""){
      this.toast.showToast({
        title:"Algo anda mal", 
        text: "No se pueden meter Rondas sin nombre", 
        type:"danger",
        delay: 4000
      })
      return;
    }
    if(this.roundsCopy.find(rnd => rnd.name === this.newRound)){
      this.toast.showToast({
        title:"Algo anda mal", 
        text: "No se pueden meter dos Rondas con el mismo nombre", 
        type:"danger",
        delay: 4000
      })
      return;
    }
    let newRound = {name: this.newRound, id: "new"+this.added}
    console.log(newRound);
    this.roundsCopy.push(newRound)
    this.added++;
    this.newRound = "";
  }

  remove(rnd) {    
    if(rnd.sets && rnd.sets.length != 0){
      this.toast.showToast({
        title:"Algo anda mal", 
        text: "No se pueden remover Rondas con Sets registrados", 
        type:"danger",
        delay: 4000
      })
      return;
    }
    this.roundsCopy.splice(this.roundsCopy.findIndex(r => r.name === rnd.name),1)
    if(this.rounds.find(r => r.id === rnd.id)){
      this.deletedIds.push(rnd.id)
    }
  }

  async saveRounds() {
    this.toast.showToast({text:"Guardando modificaciones. Espere un momento.", title:"💾 Guardando", delay: 5000})
    //TODO improve this
    for(let i = 0 ; i < this.roundsCopy.length ; i++){
      //if round existed previously with a different name and has no sets
      let originalRound = this.rounds.find(r => 
        r.id === this.roundsCopy[i].id &&
        r.name !== this.roundsCopy[i].name
      );
      if(originalRound && originalRound.sets.length !== 0){
        /*
        the idea is to rename it, for this you delete it 
        and add it again, but in order to keep it's position
        the followin ones have to be deleted and afterwards re-added
        there's no safe way to do these multiple operations with the current controller
        unless an option to update tournament is added.
        For now, the round gets deleted and added with a diferent name
        at the bottom position
        */
        await this.controller.deleteRound(this.tournament.id, originalRound.id)
        await this.controller.addRound(this.tournament.id, this.roundsCopy[i].name)
      
      } else if (!this.roundsCopy[i].sets){
        //if its a new round, it won't have sets, needs to be added
        await this.controller.addRound(this.tournament.id, this.roundsCopy[i].name)
      }
    }
    this.deletedIds.forEach(async deleted =>{
      this.rounds.splice(this.rounds.findIndex(r=> r.id === deleted), 1)
      await this.controller.deleteRound(this.tournament.id, deleted)
    })
    this.toast.showToast({
      text:"Cambios guardados. Es posible que tengas que recargar la página.",
      title:"💾✅ Completado",
      type:"notification"
    })
    this.showOverlay$.next(false)
    this.roundsCopy = [];
    this.deletedIds = [];
    this.rounds.forEach(rnd => {
      this.roundsCopy.push({...rnd} as Round)
    })
  }
}
