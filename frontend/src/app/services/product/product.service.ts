import { map } from 'rxjs/operators';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProductUrl = '/api/products'
  constructor(private http : HttpClient, private userService : UserService) { }
  getAllProducts(params){
     let query = new URLSearchParams();
    if(params['category']){
      query.append('category' , params['category'])
    }
    
     if(params['min']){
      query.append('min' , params['min'])

    }

    if(params['max']){
      query.append('max' , params['max'])

    }
    console.log(query.toString());

    
    return this.http.get(`${this.getAllProductUrl}?${query.toString()}`)
      .pipe(
        map((result : {count : number , products : Product[]})=>{
         return result.products
        
        })
      )
  }

  // get Products By Id

  getProductsById(id : string){
    return this.http.get(`${this.getAllProductUrl}/${id}`)
      .pipe(
        map((result)=>{
         return <Product>result
         
        })
      )
  }

  //saving Product
  saveProduct(data : FormData){
    
        return this.http.post(this.getAllProductUrl, data)
     
      .pipe(
        map((result : {message : string , product : Product })=>{
         return <Product>result.product
         
        })
      )
  }
}
