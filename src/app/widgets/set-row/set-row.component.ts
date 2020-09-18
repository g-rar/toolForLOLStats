import { Component, Input, OnInit } from '@angular/core';
import { Set } from 'src/app/models';

@Component({
  selector: 'app-set-row',
  templateUrl: './set-row.component.html',
  styleUrls: ['./set-row.component.scss']
})
export class SetRowComponent implements OnInit {

  @Input() set: Set;
  @Input() animate: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
