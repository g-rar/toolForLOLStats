import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
    imports: [
        HttpClientModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule
    ]
})
export default class ControlModule { }