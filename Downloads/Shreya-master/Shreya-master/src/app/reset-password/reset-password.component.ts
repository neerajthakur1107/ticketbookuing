import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NameService } from '../name.service';
import { Company } from '../company';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  resetpasswordForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required),
  });
  constructor(private nameService: NameService) { }

  ngOnInit(): void {
  }
  //send email and password to backend to change password
  resetpassword() {
    console.warn(this.resetpasswordForm.value);
    this.nameService.resetpassword(this.resetpasswordForm.value).subscribe((company: Company) => {
      console.log("Company registered", company);
      alert("your password change is successful");
    });
  }
}
