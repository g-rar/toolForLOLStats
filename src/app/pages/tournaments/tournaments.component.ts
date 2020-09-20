import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/services/control/Controller.service';
import { Tournament } from 'src/app/models';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  //todo if user is logged display add tournament button

  tournaments:Tournament[]

  constructor(private controller:Controller) {
    controller.getTournaments().then(res =>{
      this.tournaments = res;
    }).catch(err => {
      console.error(err)
    })
  }

  ngOnInit() {
  }

}
