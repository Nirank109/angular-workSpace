import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public Products : any[] =[];
  public ElectronicsCount : number =0;
  public JewellaryCount : number =0;
  public MensClothingCount : number =0;
  public WomensClothingCount : number =0;

  constructor(){}
  ngOnInit(): void {
      this.LoadProducts(`https://fakestoreapi.com/products`);
      // this.JewellaryCount = this.Products.filter(product => product.category == `Electronics`).length;
      // this.MensClothingCount = this.Products.filter(product => product.category == `Electronics`).length;
      // this.WomensClothingCount = this.Products.filter(product => product.category == `Electronics`).length;
  }
  public LoadProducts(url : string){
    fetch(url)
    .then(response => response.json())
    .then( data => {
      this.Products = data;
      // this.ElectronicsCount = data.filter(function(product : any) { return product.category == 'electronics'}).length;
      // this.JewellaryCount = data.filter(function(product : any) { return product.category == 'jewelery'}).length;
      // this.MensClothingCount = data.filter(function(product : any) { return product.category == "men's clothing"}).length;
      // this.WomensClothingCount = data.filter(function(product : any) { return product.category == "women's clothing"}).length;
      this.helper("electronics");
      this.helper("jewelery");
      this.helper("men's clothing");
      this.helper("women's clothing");

    })
  }
  public helper(e:string) : void{
    fetch(`http://fakestoreapi.com/products/category/${e}`)
    .then(response => response.json())
    .then( data =>{
      if(e == "electronics"){
        this.ElectronicsCount = data.length;
      }else if(e == "jewelery"){
        this.JewellaryCount = data.length;
      }else if( e== "women's clothing")
        this.WomensClothingCount = data.length;
      else if ( e == "men's clothing" )
        this.MensClothingCount= data.length;
    })
  }
  public getCategoryName(e:string) {
    this.LoadProducts(`http://fakestoreapi.com/products/category/${e}`);
  }

}
