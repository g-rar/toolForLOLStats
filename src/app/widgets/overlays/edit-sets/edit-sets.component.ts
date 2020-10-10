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
  setsCopy:Set[]=[]
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
    this.deletedIds.push(set.id)
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
    this.hide()
  }
}
