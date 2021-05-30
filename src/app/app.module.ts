import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {App} from '@app/app';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SellerHome} from '@app/seller-home/seller-home';
import {TasksModule} from '@app/tasks/tasks.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    App,
    SellerHome
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
