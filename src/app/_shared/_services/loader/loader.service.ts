import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoad : boolean = false;

  constructor() { }

  toggleLoader(): void {
    this.isLoad = !this.isLoad;
  }

}
