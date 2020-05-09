import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
