import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-shoppingcart',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent implements OnInit{

  public Categories: string[] =[];
  public Products :any[] =[];
  public CartBasket : any [] = [];
  public CartItemsCount : number = 0;
  public CartTotalAmount : number = 0;

  public isCartVisible : boolean = false;

  public getCartItemCount(){
    this.CartItemsCount = this.CartBasket.length;
  }

  
  public GetCategories(){
    fetch("http://fakestoreapi.com/products/categories")
    .then( response => response.json())
    .then( data => {
      data.unshift("all");
      this.Categories=data;
    })
  }

  public getProducts(url:string){
    fetch(url)
    .then(response => response.json())
    .then( data => {
      this.Products = data; 
    })
  }
  constructor(){}
  ngOnInit(): void {
      this.GetCategories();
      this.getProducts("https://fakestoreapi.com/products");
      this.getCartItemCount();
  }

  public CategoryChanged(e: any){
    // alert(e.target.value);
    if( e.target.value == "all"){
      this.getProducts("https://fakestoreapi.com/products")
    }else{
      this.getProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }
  public AddToCartCLick( id: number){
    // alert(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
      this.CartBasket.push(data);
      this.CartTotalAmount += data.price;
      alert(`${data.title}\n Added to Cart.`)
      this.getCartItemCount();
    })

  }
  public ToggleCart(){
    this.isCartVisible = (this.isCartVisible == false) ? true : false;
  }
  public RemoveItemFromCart( idx : number){
    const obj  =this.CartBasket[idx];
    let flag = confirm(`Do you want to remove ${obj.title} from cart.`);
    if(flag== true){
      this.CartTotalAmount -= obj.price;
      this.CartBasket.splice(idx,1);
    }
    this.getCartItemCount();
  }
}
