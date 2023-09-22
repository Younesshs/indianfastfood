import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { PlayoutComponent } from './playout/playout.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { MaterialsModule } from 'src/app/_shared/materials/materials.module';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { AddOrUpdateOrderitemDialogComponent } from './components/add-or-update-orderitem-dialog/add-or-update-orderitem-dialog.component';
import { HomeComponent } from './home/home.component';
import { PnavigationComponent } from './pnavigation/pnavigation.component';

@NgModule({
  declarations: [
    MenuComponent,
    CartComponent,
    PlayoutComponent,
    DocumentationComponent,
    ProductDisplayComponent,
    AddToCartComponent,
    AddOrUpdateOrderitemDialogComponent,
    HomeComponent,
    PnavigationComponent
  ],
  imports: [CommonModule, PublicRoutingModule, MaterialsModule, FormsModule],
})
export class PublicModule {}
