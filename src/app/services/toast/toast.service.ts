import { Injectable, TemplateRef } from '@angular/core';

type ToastType = ("normal"|"danger"|"notification");

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  showToast(toast:{
    text:string,
    title?:string,
    type?:ToastType,
    delay?:number,
    // link?: string,
    // imageURL?: string 
  }){
    toast.type = toast.type ? toast.type : "normal";
    this.toasts.unshift(toast)
  }

  showErrorToast(toast: {
    text:string,
    title?:string,
    delay?:number,
    // link?: string,
    // imageURL?: string 
  }){
    (<any>toast).type = "danger"
    this.toasts.unshift(toast)
  }

  showNotificationToast(toast: {
    text:string,
    title?:string,
    delay?:number,
    // link?: string,
    // imageURL?: string 
  }){
    (<any>toast).type = "notification"
    this.toasts.unshift(toast)
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
