import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RiotComService } from '../services/riot-com.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private riotCom: RiotComService) { 
  }

  ngOnInit() {
  }

}
