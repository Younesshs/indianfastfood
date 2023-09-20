import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OlayoutComponent } from './olayout/olayout.component';

import { MaterialsModule } from 'src/app/_shared/materials/materials.module';

@NgModule({
  declarations: [
    OlayoutComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialsModule
  ]
})
export class OrderModule { }
