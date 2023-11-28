import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-fordemo',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './fordemo.component.html',
  styleUrl: './fordemo.component.css'
})
export class FordemoComponent implements OnInit{

  public categories: string[] = ["Electronics", "Footware", "Beuty","Clothing"];
  public menu : any =[
    { Category : "Electronics", Product:["Mobile", "Samsung TV"] },
    { Category : "Footware" ,  Product: ["Gucci Casuals", "Nike Running"]}
  ];

  public mars : any ={};
  constructor(){

  }
  ngOnInit(): void {
      fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response=> response.json())
      .then(data=> {
        this.mars =data;
      })
  }
}
