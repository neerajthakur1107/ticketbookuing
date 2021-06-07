import { AuthguardService } from './../authguard.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Company } from '../company';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
// import {AuthguardService} from './../authguard.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  message: any;
  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder,
    private apiService: ApiService, 
    private router: Router,
    private AuthguardService: AuthguardService) {

  }


  //send login data and redirectUrl to dashboard

  ngOnInit(): void {
  }

  onSubmit() {
    this.AuthguardService.login(this.loginForm.controls.Email.value)
    const loginData = {
      Email: this.loginForm.controls.Email.value,
      Password: this.loginForm.controls.Password.value
    };
    this.apiService.userlogin(loginData).pipe(first())
      .subscribe(
        data => {
          const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);

        },
        error => {
          alert("Email or password is incorrect")
        });
  }
  get email() { return this.loginForm.get('Email'); }
  get password() { return this.loginForm.get('Password'); }

}
