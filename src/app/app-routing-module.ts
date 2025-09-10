import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Shop } from './shop/shop';
import { ProductDetails } from './shop/product-details/product-details';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
},
{
  path:'shop',
loadChildren: () => import('./shop/shop-module').then((m) => m.ShopModule), },
{
  path:'product-details/:id',
  component:ProductDetails,
},
{
  path:'**',
  redirectTo:'',
  pathMatch:'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
