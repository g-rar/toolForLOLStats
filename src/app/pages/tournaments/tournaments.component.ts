import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/services/control/Controller.service';
import { Tournament } from 'src/app/models';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  //TODO if user is logged display add tournament button

  tournaments:Tournament[]
  isUserLogged:boolean = false;

  constructor(private controller:Controller, private toast:ToastService) {
    controller.getTournaments().then(res =>{
      this.tournaments = res;
    }).catch(err => {
      console.error(err)
    })
    controller.getLoggedUser().then(res => {
      toast.showToast({
        text: "You can now add a tournament",
        type: "notification", delay: 4000
      })
      this.isUserLogged = true
    }).catch(err => {})
  }

  ngOnInit() {
  }

}
