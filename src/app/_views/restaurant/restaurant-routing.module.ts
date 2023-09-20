import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RlayoutComponent } from './rlayout/rlayout.component';

const routes: Routes = [
  { 
    path: '', component: RlayoutComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
