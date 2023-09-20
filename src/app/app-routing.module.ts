import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantAuthGuard } from './_guards/restaurant-auth/restaurant-auth.guard';
import { CusotmerAuthGuard } from './_guards/customer/cusotmer-auth.guard';
import { AdministratorAuthGuard } from './_guards/administrator/administrator-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: 'public', loadChildren: () => import('./_views/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'auth', loadChildren: () => import('./_views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'order', loadChildren: () => import('./_views/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'restaurant', loadChildren: () => import('./_views/restaurant/restaurant.module').then(m => m.RestaurantModule),
    canActivate: [RestaurantAuthGuard]
  },
  {
    path: 'customer', loadChildren: () => import('./_views/customer/customer.module').then(m => m.CustomerModule),
    canActivate: [CusotmerAuthGuard]
  },
  {
    path: 'administrator', loadChildren: () => import('./_views/administrator/administrator.module').then(m => m.AdministratorModule),
    canActivate: [AdministratorAuthGuard]
  },
  { path: '**', redirectTo: 'public/e404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
