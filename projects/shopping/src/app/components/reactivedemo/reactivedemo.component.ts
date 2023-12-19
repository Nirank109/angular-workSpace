import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder , FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './reactivedemo.component.html',
  styleUrl: './reactivedemo.component.css'
})
export class ReactivedemoComponent implements OnInit{

  constructor(private fb : FormBuilder){
  }

  public frmRegister = this.fb.group({
    UserName : this.fb.control( '',[Validators.required, Validators.minLength(4)]),
    Mobile : this.fb.control('', [Validators.required, Validators.pattern(/\+91\D{10}/)]),
    Photos: this.fb.array([this.fb.control('')])
  });

  get UserName() {
    return this.frmRegister.get('UserName') as FormControl;
  }

  get Mobile(){
    return this.frmRegister.get('Mobile') as FormControl;
  }
  get Photos(){
    return this.frmRegister.get('Photos') as FormArray;
  }
  ngOnInit(): void {
      
  }
  public SubmitForm( data : any){
    alert(JSON.stringify(data));
  }
  public AddControl(){
    this.Photos.push(this.fb.control(''));
  }
  public RemoveClick( index :number ){
    this.Photos.removeAt(index);
  }
}
