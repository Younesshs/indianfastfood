import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlayoutComponent } from './olayout/olayout.component';

const routes: Routes = [
  { 
    path: '', component: OlayoutComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
