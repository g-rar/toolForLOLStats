import { Component, ViewChild } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    //animations triggers go here
    trigger(
      'openCloseSideMenu', [
        state('closed', style({
          'margin-left': '-30rem',
        })),
        state('open', style({
          'margin-left': "0",
        })),
        transition('open => closed', [animate('0.2s')]),
        transition('closed => open', [animate('0.2s')])
      ]
    )],
})
export class AppComponent {

  @ViewChild(LoginComponent, {static: false}) private loginComp:LoginComponent;

  sideMenuOpen = false;

  showSideMenu(show:boolean){
    this.sideMenuOpen = show;
  }

  showLoginOverlay(show:boolean){
    this.loginComp.showOverlay(show);
  }

  constructor(db : AngularFirestore){
  }
}
