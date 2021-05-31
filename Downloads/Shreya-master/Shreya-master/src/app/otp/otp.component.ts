import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NameService } from '../name.service';
import { Company } from '../company';
import { Input } from '@angular/core';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  // otpForm = new FormGroup({
  //  otp: new FormControl('', Validators.required),
  //});

  constructor(private nameService: NameService) { }

  ngOnInit(): void {
  }
  // validateOTP(otp="getotp()") {
  //  if(otp == this.otpForm.value) {
  //   console.log("OTP validated");
  //   }
  // }

}
