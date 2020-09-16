import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-label',
  templateUrl: './color-label.component.html',
  styleUrls: ['./color-label.component.scss']
})
export class ColorLabelComponent implements OnInit {

  @Input() rgbColor: {r:number, g:number, b:number};
  @Input() text: string;
  @Input() forceWhiteText?:boolean;
  whiteText=true;

  constructor() { }

  ngOnInit(): void {
    this.setTextColor();
  }
  
  private setTextColor(){
    if(this.forceWhiteText != null){
      this.whiteText = this.forceWhiteText;
    } else if((this.rgbColor.r + this.rgbColor.g + this.rgbColor.g)/3 > 255/2){
      this.whiteText = false;
    }
  }

}