import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-rounds',
  templateUrl: './edit-rounds.component.html',
  styleUrls: ['./edit-rounds.component.scss']
})
export class EditRoundsComponent implements OnInit {

  @Input() showOverlay$ : BehaviorSubject<boolean>;
  showOverlay = false;

  constructor() {
  }
  
  ngOnInit(): void {
    this.showOverlay$.subscribe(val => {
      this.showOverlay = val
    })
  }

  hide() {
    this.showOverlay$.next(false);
  }

}
