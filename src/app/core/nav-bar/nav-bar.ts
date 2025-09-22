import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from '../../basket/BasketService';
import { IBasket } from '../../shared/Models/Basket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar implements OnInit {
  visible=false;
  constructor(
    private basketService: BasketService,
    //private _service: Core,
    private router:Router
  ) {}
    count: Observable<IBasket>;
  ngOnInit(): void {
    const basketId = localStorage.getItem('basketId');

    this.basketService.GetBasket(basketId).subscribe({
      next: (value) => {
        console.log(value);
        this.count = this.basketService.basket$;
      },
      error(err) {
        console.log(err);
      },
    });
    // this._service.getUserName().subscribe();
    // this._service.userName$.subscribe(value=>{
    //   this.userName=value;
    // })
  }
toggleDropDown()
{
  this.visible=! this.visible;

}
}
