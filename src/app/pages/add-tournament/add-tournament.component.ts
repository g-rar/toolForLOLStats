import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Controller } from 'src/app/services/control/Controller.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {

  //TODO build this

  newTournamentForm:FormGroup

  constructor(private controller:Controller, private formBuilder:FormBuilder) {
    this.newTournamentForm = formBuilder.group({
      name: "",
      description: "",
      startDate: null
    })
  }

  ngOnInit(): void {
  }
  

  addTournament(formData){
    this.controller.addTournament(formData.name, formData.description, formData.startDate)
  }

}
