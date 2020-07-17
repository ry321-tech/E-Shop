import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
   products : Product[] = [];
  constructor(private productService : ProductService, 
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe({
      next : (paramsMap : ParamMap)=>{
        let categoryId = paramsMap.get('category')
        let min = paramsMap.get('min')
        let max = paramsMap.get('max')
        console.log(categoryId);
        this.collectProducts({category : categoryId , min , max})
      }
    })
    
  }

  collectProducts(params){
    this.productService.getAllProducts(params)
    .subscribe({
      next : (products)=>{
        this.products = products
        console.log(this.products)
 
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

}
