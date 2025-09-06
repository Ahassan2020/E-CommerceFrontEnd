import { Injectable } from '@angular/core';
import { IPagnation } from '../shared/Models/Pagination';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../shared/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl='https://localhost:7158/api/';
  constructor(private http:HttpClient){

  }
  getProducts(){
    return this.http.get<IPagnation>(this.baseUrl+'Product/get-all');
  }
   getCategories(){
    return this.http.get<ICategory[]>(this.baseUrl+'Categories/get-all');
  }
}
