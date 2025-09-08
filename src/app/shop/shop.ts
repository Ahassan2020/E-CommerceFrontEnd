import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop-service';
import { IProduct } from '../shared/Models/Product';
import { IPagnation } from '../shared/Models/Pagination';
import { ICategory } from '../shared/Models/Category';
import { ProductParam } from '../shared/Models/ProductParam';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop implements OnInit {
  constructor(private service:ShopService){

  }
ProductParam:ProductParam = { CategoryId:null,search:null,Sort:null,pageNumber:1,pageSize:1};
  products:IProduct[]=[];
  categories:ICategory[];

  getProducts(){
    return this.service.getProduct(this.ProductParam).subscribe({
      next:((value:IPagnation)=>{
this.products=value.data;
this.TotatlCount=value.totalCount;
this.ProductParam.pageNumber = value.pageNumber;
 this.ProductParam.pageSize = value.pageCount;
     //   this.toast.success('Product Loaded Successfully', 'SUCCESS');
      })
    })
  }
  ResetValue(){
    this.ProductParam.search = null;
    this.ProductParam.CategoryId = null;
    this.ProductParam.Sort = null;
    this.getProducts();

  }
  getCategories(){
    return this.service.getCategories().subscribe({
      next:((value:ICategory[])=>{
this.categories=value
      })
    })
  }
  categoryId:number;
SelectedId(id){
this.ProductParam.CategoryId=id;
this.getProducts();
}
TotatlCount=0;
OnChangePage(event){
  debugger
      this.ProductParam.pageNumber = event;
      this.getProducts();

}
SortingOption = [
    { name: 'Price', value: 'Name' },
    { name: 'Price:min-max', value: 'PriceAce' },
    { name: 'Price:max-min', value: 'PriceDce' },
  ];

sortSelected:any;
SortingByPrice(){
this.getProducts();

}
searchitem:any
 OnSearch() {
    this.getProducts();
  }

  ngOnInit(): void {
this.getProducts();
this.getCategories();
  }

}
