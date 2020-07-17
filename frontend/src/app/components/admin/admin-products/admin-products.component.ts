import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.collectAllProducts()
  }
   collectAllProducts(){
     this.productService.getAllProducts({})
     .subscribe({
       next : (products)=>{
       this.products =products
       }
     })
   }
}
