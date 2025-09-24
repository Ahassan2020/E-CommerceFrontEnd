import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing-module';
import { FormsModule } from '@angular/forms';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
     OrderComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule

  ]
})
export class OrdersModule { }
