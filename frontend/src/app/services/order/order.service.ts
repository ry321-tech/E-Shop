import { map } from 'rxjs/operators';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   orderPlaceUrl = '/api/orders'
   userAllOrdersUrl = '/api/orders'
  constructor(private http : HttpClient, private userService : UserService) { }

  placeOrder(orderInfo : OrderInfo){
    
     return this.http.post(this.orderPlaceUrl , orderInfo)

  }

  getUserOrders(){
    
     return this.http.get(this.userAllOrdersUrl).pipe(
       map((result : {count : number , orders : Order[]})=>{
         return result.orders
       })
     )

  }
}
export interface OrderInfo { 
   firstName : string;
   lastName : string;
   address : string;
   products: ProductInfo[];
}

export interface ProductInfo {
   productId : string;
   quantity : number;
   price : number;
}