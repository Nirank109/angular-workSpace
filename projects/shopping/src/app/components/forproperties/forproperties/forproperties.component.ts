import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-forproperties',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './forproperties.component.html',
  styleUrl: './forproperties.component.css'
})
export class ForpropertiesComponent  implements OnInit{

  public Products : any[] =[];

  constructor(){

  }
  public ngOnInit(): void {
      this.getProducts();
  }
  public getProducts() {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then( data => {
      this.Products = data;
    })

  }
}
