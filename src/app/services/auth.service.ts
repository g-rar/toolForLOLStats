import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;
  userDetails: firebase.User = null;
  
  constructor(private auth: AngularFireAuth, private router:Router) { 
    this.user$ = auth.user;
    this.user$.subscribe((data) => {
      this.userDetails = data;
    })
  }

  logInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).then((value)=>{
      console.log("Logged in as: " + value.user);      
    }).catch(err => console.error(err));
  }

  logOut() {
    this.auth.signOut();
  }

  isLoggedIn() {
    return this.userDetails != null;
  }
}
