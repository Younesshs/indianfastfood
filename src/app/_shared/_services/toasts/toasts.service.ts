import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {
  isToast: boolean = false;
  toast: any = {
    message: null,
    bgColor: null,
    color: null,
    timer: null
  };

  openToast(toast: any): void {
    if (!this.isToast) {
      this.isToast = true;
      this.toast = toast;
      setTimeout(() => {
        this.isToast = false;
        this.toast = {
          message: null,
          bgColor: null,
          color: null
        };
      }, this.toast.timer);
    }
  }

  setToast(toast: any) {
    this.toast.message = toast.message;
    this.toast.bgColor = toast.bgColor;
    this.toast.color = toast.color;
  }
}
