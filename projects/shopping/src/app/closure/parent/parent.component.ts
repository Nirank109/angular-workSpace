import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent  implements OnInit{
  constructor(){}
  ngOnInit() {}
  public MessegeToChild : string='Waiting for Messege.';
  public ObjectToChild: any = {};
  public MessegeFromChild : string='';

  public SendClick(){
    this.MessegeToChild = " Hello ....! Message From Parent";
    this.ObjectToChild = {
      Name: 'TV',
      Price : 45000
    }
  }
  public GetMessegeFromChild(e:string){
    this.MessegeFromChild=e;
   
  }
}
