import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shop } from './shop';
import { ShopItem } from './shop-item/shop-item';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { ProductDetails } from './product-details/product-details';
import { RouterModule } from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ShopRoutingModule } from './shop-routing-module';



@NgModule({
  declarations: [
    Shop,
    ShopItem,
    ProductDetails
  ],
  imports: [ShopRoutingModule,
    CommonModule, FormsModule,SharedModule,RouterModule,NgxImageZoomModule
  ],
  exports:[]
})
export class ShopModule { }
