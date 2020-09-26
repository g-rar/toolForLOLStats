import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Controller } from 'src/app/services/control/Controller.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //TODO when logging in close overlay, change icon and display user's email, also show toast

  loginOverlayOpen:boolean;
  isLoggedIn:boolean;
  loginForm:FormGroup;
  loggedMail: string = null;

  constructor(private controller:Controller, private formBuilder: FormBuilder, private toast:ToastService) {
    this.loginForm = formBuilder.group({
      email: "",
      password: ""
    })
  }

  showOverlay(show:boolean){
    this.loginOverlayOpen = show;
  }

  ngOnInit() {
    this.controller.getLoggedUser().then(res => {
      this.isLoggedIn = true
      this.loggedMail = res.email
    }).catch(err => {
      this.isLoggedIn = false;
      console.error("There's no user logged");
    })
  }

  logOut(){
    this.controller.logout().then(() => location.reload()).catch(err => console.error(err));
  }

  logIn(formData){
    this.controller.login(formData.email, formData.password).then(res => {
      this.toast.showToast({
        text: "Se ha iniciado sesión",
        delay: 2000
      })
      this.showOverlay(false)
      this.ngOnInit()
    }).catch(err => {
      this.toast.showToast({
        type: "danger",
        text: err,
        delay: 2000
      })
      console.error(err)
    });
  }
}
