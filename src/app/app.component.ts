import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from './_services/responsive/responsive.service';
import { LoaderService } from './_shared/_services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'indian-fast-food';

  get isLoad() {
    return this.LoaderService.isLoad;
  }

  constructor(
    private ResponsiveService: ResponsiveService,
    private LoaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.ResponsiveService.deviceDetection();
  }

}
