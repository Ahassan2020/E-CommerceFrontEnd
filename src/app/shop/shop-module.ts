import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shop } from './shop';
import { ShopItem } from './shop-item/shop-item';



@NgModule({
  declarations: [
    Shop,
    ShopItem
  ],
  imports: [
    CommonModule
  ],
  exports:[Shop,ShopItem]
})
export class ShopModule { }
