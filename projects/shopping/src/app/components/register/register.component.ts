import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchaService } from '../../services/captcha.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public Code : string ='';
  constructor( private Captcha : CaptchaService){
   
  }
  ngOnInit(): void {
      this.Code= this.Captcha.GenerateRandomNumber();
  }
  public ChangeCode(){
    this.Code= this.Captcha.GenerateRandomNumber();
  }
}
