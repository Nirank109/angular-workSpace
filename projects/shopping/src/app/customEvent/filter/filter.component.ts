import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  @Input() public ElectronicsCount : number =0;
  @Input() public JewellaryCount : number =0;
  @Input() public MensClothingCount : number =0;
  @Input() public WomensClothingCount : number =0;

  constructor(){}
  ngOnInit(): void {
      
  }

}
