import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { ProductContract } from '../contracts/ProductContract';

@Component({
  selector: 'app-databinding',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent implements OnInit {
  public Product: ProductContract = {
    Name: '',
    Price: 0,
    Stock: false,
    City: "Select a city"
  };

  public LoadProduct():void{
    // JS promise type FETCH
    fetch("http://fakestoreapi.com/products/1")
    .then( response => response.json())
    .then( data => {
      this.Product = data;
    })
  }

  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.LoadProduct();
  }

}
