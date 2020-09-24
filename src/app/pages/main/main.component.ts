import { Component, OnInit } from '@angular/core';
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
