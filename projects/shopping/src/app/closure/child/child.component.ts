import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnInit{

  @Input() public MessegeFromParent : string ='';
  @Output() public ChildClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
      
  }

  public OnButtonClick(): void {
    this.ChildClick.emit('Hello...! Message From child');
  }
}
