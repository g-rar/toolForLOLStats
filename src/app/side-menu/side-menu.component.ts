import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
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
export class SideMenuComponent implements OnInit {

  navElements = [
    { path: '/tournaments', icon: 'assets/svg/cup.svg', text: 'Torneos'},
    { path: '/players', icon: 'assets/svg/controller.svg', text: 'Jugadores'}
  ]
  
  private navElementsTO = [
    { path: '/report-game', icon: 'assets/svg/report.svg', text: 'Reportar'},
    { path: '/reg-tournament', icon: 'assets/svg/register.svg', text: 'Reg. Torneo'},
    { path: '/reg-team', icon: 'assets/svg/team.svg', text:'Reg. Equipo'}
  ]

  sideMenuOpen = false;
  
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.navElements = this.navElements.concat(this.navElementsTO)
    }
  }

  showSideMenu(show:boolean){
    this.sideMenuOpen = show;
  }

}
