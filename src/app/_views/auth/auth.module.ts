import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AlayoutComponent } from './alayout/alayout.component';
import { RegisterComponent } from './register/register.component';
import {MatTableModule} from '@angular/material/table'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialsModule } from 'src/app/_shared/materials/materials.module';

@NgModule({
  declarations: [
    LoginComponent,
    AlayoutComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class AuthModule { }
