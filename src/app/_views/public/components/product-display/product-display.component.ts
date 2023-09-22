import { Component, Input } from '@angular/core';
import { ProductDisplay } from '../../../../_shared/_models/ProductDisplay';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
})
export class ProductDisplayComponent {
  @Input() product?: ProductDisplay;
}
