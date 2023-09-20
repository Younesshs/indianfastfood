import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ClayoutComponent } from './clayout/clayout.component';

import { MaterialsModule } from 'src/app/_shared/materials/materials.module';

@NgModule({
  declarations: [
    ClayoutComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialsModule
  ]
})
export class CustomerModule { }
