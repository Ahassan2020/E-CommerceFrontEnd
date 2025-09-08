import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shop } from './shop';
import { ShopItem } from './shop-item/shop-item';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [
    Shop,
    ShopItem
  ],
  imports: [
    CommonModule, FormsModule,SharedModule
  ],
  exports:[Shop,ShopItem]
})
export class ShopModule { }
