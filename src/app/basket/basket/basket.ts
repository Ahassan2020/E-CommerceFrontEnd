import { Component, OnInit } from '@angular/core';
import { IBasket, IBasketItem } from '../../shared/Models/Basket';
import { BasketService } from '../BasketService';

@Component({
  selector: 'app-basket',
  standalone: false,
  templateUrl: './basket.html',
  styleUrl: './basket.scss'
})
export class Basket  implements OnInit  {
 constructor(private  basketService: BasketService) {}

  basket:IBasket
  ngOnInit(): void {
    this.basketService.basket$.subscribe({
      next:(value)=> {
        this.basket=value
      },
      error(err) {
        console.log(err);

      },
    })
  }
  RemoveBasket(item:IBasketItem){
   this.basketService.removeItemFormBasket(item)
  }
  incrementQuantity(item:IBasketItem){
    this.basketService.incrementBasketItemQuantity(item);
  }
  DecrementQuantity(item:IBasketItem){
    this.basketService.DecrementBasketItemQuantity(item);
  }

}
