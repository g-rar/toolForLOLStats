import { Component, ViewChild } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {

  @ViewChild(LoginComponent) private loginComp:LoginComponent;
  @ViewChild(SideMenuComponent) private sideMenu:SideMenuComponent;

  isLoggedIn = false;

  showLoginOverlay(show:boolean){
    this.loginComp.showOverlay(show);
  }

  showSideMenu(){
    this.sideMenu.showSideMenu(true);
  }

  constructor(private authService: AuthService){
  }

  ngOnInit() {
    this.authService.user$.subscribe((data) => {
      this.isLoggedIn = data ? true : false;
    })
  }
}
