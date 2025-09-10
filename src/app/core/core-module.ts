import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from './nav-bar/nav-bar';
import { AppRoutingModule } from "../app-routing-module";
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    NavBar
  ],
  imports: [
    CommonModule,RouterModule,
    AppRoutingModule,BrowserAnimationsModule
],
  exports:[NavBar]
})
export class CoreModule { }
