import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {Company} from '../company';
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  invalidRegistration : boolean = false;
  otp=0;
  registerForm = new FormGroup({
    TempID: new FormControl(''),
    CompanyName: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Designation: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    MobileNo: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    ColdStorage: new FormControl(''),
    Energy: new FormControl(''),
    Password: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('',Validators.required),
   }

 );
 
  constructor(private nameService: NameService,private router: Router) { }

  ngOnInit(): void {}
  //send form details to backend and move to otp component
  validators(){
   ConfirmedValidator(this.registerForm.controls.Password.value, this.registerForm.controls.ConfirmPassword.value);
  }
  get f(){
    return this.registerForm.controls;
  }
  registerCompany(){
    console.warn(this.registerForm.value);
      this.nameService.registerCompany(this.registerForm.value).subscribe((company: Company)=>{
        console.log("Company registered", company);
        this.invalidRegistration = true;
        if(this.registerForm.controls.Password.value==this.registerForm.controls.ConfirmPassword.value){
          this.router.navigateByUrl('otp');
          }else{
            alert('password does not match');
          }
       
      });
    }
    
    sendOTP(){
      this.nameService.sendOTP(this.registerForm.value.Email).subscribe((Email: Company)=>{
        console.log(Email);
        
      });
    }
    getotp(){
      return this.otp;
  }
}
