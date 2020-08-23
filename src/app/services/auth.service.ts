import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { take, tap, map } from 'rxjs/operators';

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
      if(data){
        localStorage.setItem('userLogged', 'true');  
      } else {
        localStorage.setItem('userLogged', null);  
      }
    })
  }

  logInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).then((value)=>{
      window.location.reload();
    }).catch(err => console.error(err));
  }

  logOut() {
    this.auth.signOut().then(()=>{
      window.location.reload()
    });
  }

  isLoggedIn(){
    if(JSON.parse(localStorage.getItem('userLogged')) != null){
      return true;
    } else {
      return false;
    }
  }
}
