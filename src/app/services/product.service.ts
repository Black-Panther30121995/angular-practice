import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor() { 
  //   console.log("product-service");
  // }
  // getProductData()
  // {
  //   return[
  //     {name:'mobile',brand:'samsung',price:20000},
  //     {name:'laptop',brand:'dell',price:200000},
  //     {name:'tablet',brand:'samsung',price:40000}]
  // }

  constructor(private http:HttpClient){}

  getProductList()
  {
    const url="https://dummyjson.com/products";
    return this.http.get(url);
  }

}
