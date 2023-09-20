import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LargeLoaderComponent } from './_shared/_components/large-loader/large-loader.component';
import { ToastsComponent } from './_shared/_components/toasts/toasts.component';

@NgModule({
  declarations: [
    AppComponent,
    LargeLoaderComponent,
    ToastsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
