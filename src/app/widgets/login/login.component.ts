import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Controller } from 'src/app/services/control/Controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginOverlayOpen:boolean;
  isLoggedIn:boolean;
  loginForm:FormGroup;
  loggedMail: string = null;

  constructor(private controller:Controller, private formBuilder: FormBuilder) {
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
      console.log("Logged in succesfully");
      this.ngOnInit()
    }).catch(err => {
      console.error(err)
    });
    // this.authService.logInWithEmailAndPassword(
    //   formData.email,
    //   formData.password
    // )
  }
}
