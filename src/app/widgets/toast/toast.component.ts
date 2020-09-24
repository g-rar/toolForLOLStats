import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service' 

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  host: {'[class.ngb-toasts]': 'true'},
  styleUrls: ['./toast.component.scss'],
  animations: [    
    trigger(
      'showHideToast', [
        transition(':enter', [
          style({position: 'relative', right: '-20rem'}),
          animate('0.2s', style({right:'0px'}))
        ]),
        transition(':leave',[
          style({position:"relative", right: '0'}),
          animate('0.2s', style({right:"-20rem"}))
        ])
      ]
    )
  ]
})
export class ToastComponent implements OnInit {

  tService: ToastService

  constructor( toastService: ToastService) { 
    this.tService = toastService;
  }

  ngOnInit(): void {
  }

}