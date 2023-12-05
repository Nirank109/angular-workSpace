import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventdemo',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './eventdemo.component.html',
  styleUrl: './eventdemo.component.css'
})
export class EventdemoComponent implements OnInit {

  public Users: any [] =[
    {UserId:'John'},
    {UserId:'John12'},
    {UserId:'John123'},
    {UserId:'David'}
  ];

  public UsersMesseges :string ='';
  public isValidUser :boolean =false;
  public isInValidUser :boolean =false;

  public showCapsError :boolean =false;

  public showCityError : boolean=false;
  constructor(){}
  ngOnInit(): void {
      
  }
  public InsertClicked(e:any){
    document.write(`
    ButtonId Id   : ${e.target.id} <br>
    Button Name : ${e.target.name} <br>
    Button Class  : ${e.target.className} <br>
    X Position    :  ${e.clientX} <br>
    Y Position    :  ${e.clientY} <br>
    Ctrl key   :  ${e.ctrlkey}
    `);
  }
  public VerifyUserId(e:any){
    for( var user of this.Users){
      if(user.UserId == e.target.value){
        this.UsersMesseges= 'UserId taken. Please Try Another.';
        this.isValidUser=false;
        this.isInValidUser=true;
        break;
      }else{
        this.isInValidUser=false;
        this.isValidUser=true;
        this.UsersMesseges=' User Id is Available';
      }
    }
  }
  public RemoveMesseges():void{
    this.UsersMesseges = "";
  }

  public VerifyCaps(e:any):void {
    if( e.keyCode >= 65 && e.keyCode <= 90){
      this.showCapsError=true;
    }
    else{
      this.showCapsError=false;
    }
  }
  public VerifyCity( e:any): void {
    if(e.target.value == '-1'){
      this.showCityError= true;
    }
    else{
      this.showCityError=false;
    }
  }

}
