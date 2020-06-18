import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ReportGameComponent } from './report-game/report-game.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { InlineSVGModule } from 'ng-inline-svg';

var firebaseConfig = {
  apiKey: "AIzaSyAm4XhFsTNZUgHbkW7ZFnNglLA0kqlBS6k",
  authDomain: "teclolstats.firebaseapp.com",
  databaseURL: "https://teclolstats.firebaseio.com",
  projectId: "teclolstats",
  storageBucket: "teclolstats.appspot.com",
  messagingSenderId: "20095061681",
  appId: "1:20095061681:web:518c17a1ee148ad4931c90"
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    ReportGameComponent,
    LoginComponent,
    UnauthorizedComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    InlineSVGModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
