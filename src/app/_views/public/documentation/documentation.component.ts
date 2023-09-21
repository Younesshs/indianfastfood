import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/_services/responsive/responsive.service';
import { ToastsService } from 'src/app/_shared/_services/toasts/toasts.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {

  toasts: any = {
    exampleOne: {
      "message": "< 30 caractères",
      "bgColor": "var(--color-brown)",
      "color": "var(--color-white)"
    },
    exampleTwo: {
      "message": "Toasts example >= 30 caractères",
      "bgColor": "var(--color-light-brown)",
      "color": "var(--color-white)"
    },
  }

  get device() {
    return this.ResponsiveService.device
  }

  constructor(private ResponsiveService: ResponsiveService, private ToastsService: ToastsService) { }

  openToastExampleOne() {
    this.ToastsService.setToast(this.toasts.exampleOne);
    this.ToastsService.openToast(this.toasts.exampleOne);
  }

  openToastExampleTwo() {
    this.ToastsService.setToast(this.toasts.exampleTwo);
    this.ToastsService.openToast(this.toasts.exampleTwo);
  }

}
