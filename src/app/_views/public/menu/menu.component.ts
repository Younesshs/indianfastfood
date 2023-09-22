import { Component } from '@angular/core';
import { Products } from 'src/app/_shared/_models/Mocks/Products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  products = Products;
}
