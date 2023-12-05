import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngstyledemo',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './ngstyledemo.component.html',
  styleUrl: './ngstyledemo.component.css'
})
export class NgstyledemoComponent implements OnInit{

  public styleObject: any ={
    'position':'',
    'left':'',
    'top':''
  };
  constructor(){

  }
  public ngOnInit(): void {
      
  }
  public GetPosition( e: any){
    this.styleObject = {
      'position' : 'fixed',
      'left'     :( e.clientX -0) +'px' ,
      'top'      : (e.clientY -0)  +'px'
    }
  }

}
