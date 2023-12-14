import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakestoreapiService } from '../../services/fakestoreapi.service';

@Component({
  selector: 'app-servicedemo',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './servicedemo.component.html',
  styleUrl: './servicedemo.component.css'
})

export class ServicedemoComponent implements OnInit {

  public Categories : string[] = [];
  public Products : any[] = [];


  constructor( private data : FakestoreapiService){}
  ngOnInit(): void {
    this.data.getCategory().subscribe( data => this.Categories = data);
    this.data.getProduct().subscribe( data => this.Products = data);

      
  }
  
}
