import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing-module';
import { Register } from './register/register';
import { SharedModule } from '../shared/shared-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Active } from './active/active';
import { Login } from './login/login';
import {  ResetPasswordComponent } from './reset-password/reset-password';


@NgModule({
  declarations: [
    Register,
    Active,
    Login,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,
  ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class IdentityModule { }
