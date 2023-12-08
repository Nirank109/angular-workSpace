import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() public JewelaryCount : number =0;
  @Input() public MensClothingCount : number =0;
  @Input() public WomensClothingCount : number =0;
  @Output() public FilterChanged : EventEmitter<string> = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
      
  }
  public ButtonClick( e:any ) : void {
    this.FilterChanged.emit(e.target.name);
  }

}
