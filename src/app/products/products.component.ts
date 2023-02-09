import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id:1, name: 'Minimalists Analog Watch', price: 'PriceLess', color: 'Black', available: 'Available', image: '/assets/products/product-image-1.jpeg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: 'PriceMore', color: 'Black', available: 'Available', image: '/assets/products/product-image-2.jpg'},
    {id:3, name: 'APPLE iPhone 12', price: 'PriceLess', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-3.jpg'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: 'PriceLess', color: 'White', available: 'Available', image: '/assets/products/product-image-4.png'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: 'PriceMore', color: 'White', available: 'Not Available', image: '/assets/products/product-image-5.jpg'},
    {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: 'PriceMore', color: 'White', available: 'Available', image: '/assets/products/product-image-6.jpg'}
  ];

  getAllProduct(){
    return this.products.length;
  }
  getPriceLess(){
    return this.products.filter(products => products.price =='PriceLess').length;
  }
  getPriceMore(){
    return this.products.filter(products => products.price == 'PriceMore').length;
  }


  ProductRadioButtonSelection:string = 'All'

  onRadioButtonSelectionChange(data:string) {
    this.ProductRadioButtonSelection = data
    console.log(this.ProductRadioButtonSelection)
  }
}
