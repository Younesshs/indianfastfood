import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { PlayoutComponent } from './playout/playout.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { MaterialsModule } from 'src/app/_shared/materials/materials.module';
import { FactureComponent } from './facture/facture.component';

@NgModule({
  declarations: [
    MenuComponent,
    CartComponent,
    PlayoutComponent,
    DocumentationComponent,
    FactureComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialsModule
  ]
})
export class PublicModule { }
