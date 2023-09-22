import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayoutComponent } from './playout/playout.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', component: PlayoutComponent,
    children: [
      { path: '', redirectTo: 'documentation', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'menu', component: MenuComponent },
      { path: 'cart', component: CartComponent },
      { path: 'documentation', component: DocumentationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }