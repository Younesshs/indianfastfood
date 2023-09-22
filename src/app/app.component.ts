import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from './_services/responsive/responsive.service';
import { LoaderService } from './_shared/_services/loader/loader.service';
import { ToastsService } from './_shared/_services/toasts/toasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'indian-fast-food';

  get isToast() {
    return this.ToastsService.isToast;
  }

  get isLoad() {
    return this.LoaderService.isLoad;
  }

  constructor(
    private ResponsiveService: ResponsiveService,
    private LoaderService: LoaderService,
    private ToastsService: ToastsService
  ) { }

  ngOnInit(): void {
    this.ResponsiveService.deviceDetection();
  }

}
