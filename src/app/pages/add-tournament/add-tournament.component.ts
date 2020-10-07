import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {

  //TODO give data validation feedback
  //TODO clear out what dates should it accept
  //FIXME should be able to set a startday the same day.

  canSubmit = false;
  newTournamentForm:FormGroup

  constructor(private controller:Controller, private formBuilder:FormBuilder, private toast:ToastService, private router: Router) {
    this.newTournamentForm = formBuilder.group({
      tournamentName: new FormControl('', [Validators.required]),
      tournamentDescription: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required, this.dateValidator])
    })
    this.newTournamentForm.valueChanges.subscribe(value => {
      this.canSubmit = this.newTournamentForm.valid
    })
  }

  dateValidator(control : AbstractControl) : {[key:string]:boolean} | null  {
    if(control.value){
      let d = new Date(control.value)
      console.log("Fecha creada:" ,d);
      console.log("Desde el form",control.value);
      console.log("Fecha del momento:", new Date());
      
      
      if(d < new Date()){
        return {'futureDateValidator': true}
      }
    }
    return null
  }

  ngOnInit(): void {
  }

  addTournament(formData){
    console.log(formData);
    this.controller.addTournament(
      formData.tournamentName, 
      formData.tournamentDescription, 
      new Date(formData.startDate)
    ).then(res => {
      this.router.navigate(["/tournaments"])
      this.toast.showToast({
        text: "Se ha añadido el torneo correctamente",
        type: "notification",
        delay: 3000
      })
    }).catch(err => {
      this.toast.showToast({
        text: err,
        type: "danger"
      })
    })
  }

}
