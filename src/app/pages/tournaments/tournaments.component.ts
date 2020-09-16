import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/services/control/Controller.service';
import { Tournament } from 'src/app/models';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournaments:Tournament[]

  constructor(private controller:Controller) {
    controller.getTournaments().then(res =>{
      let f:Tournament = Object.create(res[0]);
      f.startDate = new Date("9/20/2020")
      let s:Tournament = Object.create(res[0]);
      s.endDate = new Date();
      this.tournaments = res;
      this.tournaments.push(f)
      this.tournaments.push(s)
    })
  }

  ngOnInit() {
  }

}
