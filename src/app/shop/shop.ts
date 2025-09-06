import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop-service';
import { IProduct } from '../shared/Models/Product';
import { IPagnation } from '../shared/Models/Pagination';
import { ICategory } from '../shared/Models/Category';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop implements OnInit {
  constructor(private service:ShopService){

  }
ProductParam:any;
  products:IProduct[];
  categories:ICategory[];

  getProducts(){
    return this.service.getProducts().subscribe({
      next:((value:IPagnation)=>{
this.products=value.data
      })
    })
  }
  getCategories(){
    return this.service.getCategories().subscribe({
      next:((value:ICategory[])=>{
this.categories=value
      })
    })
  }
SelectedId(id){

}
  ngOnInit(): void {
this.getProducts();
this.getCategories();
  }

}
