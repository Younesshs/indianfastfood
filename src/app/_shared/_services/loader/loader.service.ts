import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoad: boolean = false;
  message!: string;

  constructor() { }

  openLargeLoaderWithTimer(time: number): void {
    if (time) {
      this.isLoad = true;
      setTimeout(() => {
        this.isLoad = false;
      }, (time * 1000));
    }
  }

  openLargeLoader(): void {
    this.isLoad = true;
  }

  closeLargeLoader(): void {
    this.isLoad = false;
  }

}
