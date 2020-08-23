import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RiotComService } from '../../services/riot-com.service';
import { AuthService } from '../../services/auth.service';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore/';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isLoggedIn = false;
  loggedMail = '';
  // btnSVGProps = {'fill':'var(--color-main)',
  //               'height':'3rem',
  //               'width':'3rem',
  //               'transition': '300ms ease-in-out',
  //              };


  constructor(private authService : AuthService, private formBuilder: FormBuilder, private db:AngularFirestore) {}

  ngOnInit() {
  }

}