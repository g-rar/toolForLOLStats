import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InlineSVGModule } from 'ng-inline-svg';
import { ReportGameComponent } from './pages/report-game/report-game.component';
import { LoginComponent } from './widgets/login/login.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { SideMenuComponent } from './widgets/side-menu/side-menu.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import ControlModule from './services/control.module';
import { Controller } from './services/control/Controller.service';
import MockController from './services/control/MockController.service';
import { TournamentCardComponent } from './widgets/tournament-card/tournament-card.component';
import { ColorLabelComponent } from './widgets/color-label/color-label.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { environment } from 'src/environments/environment';
import { SetRowComponent } from './widgets/set-row/set-row.component';
import { ToastComponent } from './widgets/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    ReportGameComponent,
    LoginComponent,
    UnauthorizedComponent,
    SideMenuComponent,
    TournamentsComponent,
    TournamentCardComponent,
    ColorLabelComponent,
    TournamentComponent,
    SetRowComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    InlineSVGModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ControlModule
  ],
  providers: [
    { provide: Controller, useClass: MockController }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
