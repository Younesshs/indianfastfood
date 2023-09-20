import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from './_services/responsive/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'indian-fast-food';

  constructor(private ResponsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.ResponsiveService.deviceDetection();
  }

}
