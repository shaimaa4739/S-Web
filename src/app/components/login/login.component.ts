import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myData:string="User authentication success"

  @Output() customEvent = new EventEmitter();

  sendData(){
    this.customEvent.emit(this.myData)
  }
  ourValidation;
  constructor() {
    this.ourValidation = new FormGroup(
      {
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
      }
    );
  }
  get getEmail(){
    return this.ourValidation.controls["email"];
  }
  get getPassword(){
    return this.ourValidation.controls["password"];
  }
  get getPasswordValid(){
    return this.ourValidation.controls["password"].valid;
  }

  submitData()
  {
    if(this.ourValidation.controls["email"].valid && this.ourValidation.controls["password"].valid){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit(): void {
    // this.customEvent.emit(this.myData)
  }

}
