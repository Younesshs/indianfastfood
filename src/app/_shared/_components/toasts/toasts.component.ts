import { Component, OnInit } from '@angular/core';
import { ToastsService } from 'src/app/_shared/_services/toasts/toasts.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  isLargeSize: boolean = false;
  isMessageSize: boolean = false;

  get toast() {
    return this.ToastsService.toast;
  }

  constructor(private ToastsService: ToastsService) { }

  ngOnInit(): void {
    this.isMessageSize = this.checkMessageSize(this.toast.message) ? true : false;
  }

  checkMessageSize(message: string) {
    return message.length >= 30;
  }

  editSizeOfToasts() {
    this.isLargeSize = !this.isLargeSize;
  }
}
