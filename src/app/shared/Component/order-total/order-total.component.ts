import { Component, OnInit } from '@angular/core';
import { IBasketTotal } from '../../Models/Basket';
import { BasketService } from '../../../basket/BasketService';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrl: './order-total.component.scss',
  standalone:false
})
export class OrderTotalComponent implements OnInit {
  basketTotals:IBasketTotal
  constructor(private basketService:BasketService) { }
  ngOnInit(): void {
    this.basketService.basketTotal$.subscribe({
      next:(value)=> {
        this.basketTotals=value
      },
      error(err) {
        console.log(err);

      },
    })
  }

}
