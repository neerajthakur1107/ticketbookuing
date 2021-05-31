import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NameService } from '../name.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  invalidForgot : boolean = false;
  forgotpasswordForm = new FormGroup({
    CompanyName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),  
  });
  constructor(private nameService: NameService,private router: Router) { }
// ask for detail of company if succesfully submit navigate to reset password
  ngOnInit(): void {
  }
  changePassword() {
    var req = {
      "Email": this.forgotpasswordForm.value.Email
    }
    this.nameService.changePassword(req).subscribe((link)=>{
      console.log("Link sent");
    });
    this.invalidForgot = true;
    this.router.navigateByUrl('/reset-password');
   
  }

}
