import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Controller } from 'src/app/services/control/Controller.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    //animations triggers go here
    trigger(
      'openCloseSideMenu', [
        state('closed', style({
          'display': 'none',
          'margin-left': '-30rem',
        })),
        state('open', style({
          'display':'initial',
          'margin-left': "0",
        })),
        transition('open => closed', [animate('0.2s')]),
        transition('closed => open', [
        animate('0.2s', 
          keyframes([
            style({'display':'initial'}),
            style({'margin-left': '0rem'})
          ])
        )])
      ]
    ),
    trigger(
      'showHideBg', [
        transition(':enter', [
          style({opacity: 0}),
          animate('0.2s', style({opacity:0.5}))
        ]),
        transition(':leave',[
          style({opacity:0.5}),
          animate('0.2s', style({opacity:0}))
        ])
      ]
    )
  ],
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
  
  constructor(private controller: Controller) {
  }

  ngOnInit() {
    this.controller.getLoggedUser().then(user => {
      this.navElements = this.navElements.concat(this.navElementsTO)
    }).catch(err => {})
  }

  showSideMenu(show:boolean){
    this.sideMenuOpen = show;
  }

}
