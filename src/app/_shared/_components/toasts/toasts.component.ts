import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  isLargeSize : boolean = false;
  message : string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  bgColor : string = 'var(--color-brown)';
  color : string = 'var(--color-white)';

  ngOnInit(): void {
    this.checkMessageSize(this.message)
  }

  checkMessageSize(message : string) {
    return message.length >= 30;
  }

  editSizeOfToasts() {
    this.isLargeSize = !this.isLargeSize;
  }
}
