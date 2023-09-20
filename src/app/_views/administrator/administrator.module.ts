import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';

import { MaterialsModule } from 'src/app/_shared/materials/materials.module';

@NgModule({
  declarations: [
    AlayoutComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MaterialsModule
  ]
})
export class AdministratorModule { }
