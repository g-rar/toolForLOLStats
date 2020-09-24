import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RiotComService } from '../../services/riot-com.service';
import { AuthService } from '../../services/auth.service';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore/';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isLoggedIn = false;
  loggedMail = '';

  constructor(private toastService:ToastService) {}

  ngOnInit() {
  }

  //TODO Delete this temporary testing code and also 
  //TODO research a better to test widgets
  testToast() {
    this.toastService.showToast({text: "Hola amigos :D", title: "Saludo"})
    this.toastService.showToast({text: "Hola amigos :D", delay:3000, type: "notification"})
  }

}
