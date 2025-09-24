import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from './register/register';
import { Active } from './active/active';
import { Login } from './login/login';
import { ResetPasswordComponent } from './reset-password/reset-password';

const routes: Routes = [

   {path:'Register',component:Register},
  {path:'active',component:Active},
   {path:'Login',component:Login},
  {path:'Reset-Password',component:ResetPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityRoutingModule { }
