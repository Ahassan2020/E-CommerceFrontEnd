import { Injectable } from '@angular/core';
import { IPagnation } from '../shared/Models/Pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICategory } from '../shared/Models/Category';
import { ProductParam } from '../shared/Models/ProductParam';
import { IProduct } from '../shared/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl='https://localhost:7158/api/';
  constructor(private http:HttpClient){

  }
  getProduct(productParam:ProductParam) {
    let param=new HttpParams();
    if(productParam.CategoryId){
      param=param.append("categoryId",productParam.CategoryId)
    }
    if(productParam.Sort){
      param=param.append("Sort",productParam.Sort)
    }
    if(productParam.search){
      param=param.append("Search",productParam.search)
    }
    param=param.append("pageNumber",productParam.pageNumber)
    param=param.append("pageSize",productParam.pageSize)
    return this.http.get<IPagnation>(this.baseUrl+"Product/get-all",{params:param});
  }
   getCategories(){
    return this.http.get<ICategory[]>(this.baseUrl+'Categories/get-all');
  }
   getproductById(id){
    return this.http.get<IProduct>(this.baseUrl+'Product/get-by-id/'+id);
  }
}
