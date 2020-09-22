import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  showToast(toast:{
    text:string,
    title?:string,
    type?:("normal"|"danger"|"notification"),
    delay?:number,
    // link?: string,
    // imageURL?: string 
  }){
    toast.type = toast.type ? toast.type : "normal";
    this.toasts.push(toast)
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
