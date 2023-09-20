import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RlayoutComponent } from './rlayout/rlayout.component';

import { MaterialsModule } from 'src/app/_shared/materials/materials.module';

@NgModule({
  declarations: [
    RlayoutComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MaterialsModule
  ]
})
export class RestaurantModule { }
