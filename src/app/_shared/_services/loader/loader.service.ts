import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoad: boolean = false;
  message!: string;

  constructor() { }

  openLargeLoader(time: number | null = null) {
    if (time !== null) {
      this.isLoad = true;
      setTimeout(() => {
        this.isLoad = false;
      }, (time * 1000));
    } else {
      this.isLoad = true;
    }
  }

  closeLargeLoader(): void {
    this.isLoad = false;
  }

}
