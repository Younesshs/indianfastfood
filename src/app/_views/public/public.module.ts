import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { PlayoutComponent } from './playout/playout.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MenuComponent,
    CartComponent,
    PlayoutComponent,
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatButtonModule
  ]
})
export class PublicModule { }
