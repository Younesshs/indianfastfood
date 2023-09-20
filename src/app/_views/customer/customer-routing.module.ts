import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClayoutComponent } from './clayout/clayout.component';

const routes: Routes = [
  { 
    path: '', component: ClayoutComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
