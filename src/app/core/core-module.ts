import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from './nav-bar/nav-bar';
import { AppRoutingModule } from "../app-routing-module";
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [
    NavBar
  ],
  imports: [
    CommonModule,RouterModule, MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    AppRoutingModule,BrowserAnimationsModule
],
  exports:[NavBar]
})
export class CoreModule { }
