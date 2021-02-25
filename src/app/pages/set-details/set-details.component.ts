import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

/**
 * @todo This component should display the details of a set, a list of matches with corresponding stats, and be able to redirect to respective tournament, players and champs
 */
@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.scss']
})
export class SetDetailsComponent implements OnInit {

  //TODO build this (by now it only console logs the matches)

  constructor(private route:ActivatedRoute,private controller: Controller, private toast: ToastService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.controller.getMatches(params.tournamentId, params.roundId, params.setId).then(res => {
        console.log(" Los encuentros recuperados ",res);
        
      }).catch(err => {
        this.toast.showErrorToast({title:"Hubo un error", text: err, delay:4000})
      })
      this.controller.getPlayerStats().then(res => {
        console.log("Stats de jugadores recuperados",res);
        
      })
    })
    
  }

}
