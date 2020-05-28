import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Observable<firebase.User>;

  constructor(private auth: AngularFireAuth) { 
    this.user = auth.authState;
  }

  getUser(){
    return this.auth.user;
  }

  logInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).then((value)=>{
      console.log("Logged in as: " + value.user);      
    }).catch(err => console.error(err));
  }

  logOut() {
    this.auth.signOut();
  }
}
