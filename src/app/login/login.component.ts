import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginOverlayOpen:boolean;
  private isLoggedIn:boolean;
  private loginForm:FormGroup;
  private loggedMail="foo";

  constructor(private authService:AuthService,private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: "",
      password: ""
    })
  }

  showOverlay(show:boolean){
    this.loginOverlayOpen = show;
  }

  ngOnInit() {
    this.authService.user.subscribe((data) => {
      this.isLoggedIn = data ? true : false;
      this.loggedMail = data ? data.email : "foo"
    })
  }

  logOut(){
    this.authService.logOut();
  }

  logIn(formData){
    this.authService.logInWithEmailAndPassword(
      formData.email,
      formData.password
    )
  }
}
