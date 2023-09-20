import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/_services/responsive/responsive.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent  {

  get device() {
    return this.ResponsiveService.device
  }

  constructor(private ResponsiveService: ResponsiveService) { }

}
