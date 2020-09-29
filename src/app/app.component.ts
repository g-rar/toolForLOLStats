import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from './widgets/login/login.component';
import { SideMenuComponent } from './widgets/side-menu/side-menu.component';
import { Controller } from './services/control/Controller.service';

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

  constructor(private controller: Controller){
  }

  ngOnInit() {
    this.controller.getLoggedUser().then(res => {
      this.isLoggedIn = true
    }).catch(err => {
      this.isLoggedIn = false
    })
  }
}
