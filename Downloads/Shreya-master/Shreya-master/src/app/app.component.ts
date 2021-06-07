import { Component } from '@angular/core';
import { NameService } from './name.service';
import {ApiService} from './api.service';
import {Company} from './company';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import {HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-php';
  loginbtn:boolean;
  logoutbtn:boolean;
  isShown: boolean = false ; //use for default hiding login and logout
  constructor(private apiService: ApiService){
    // login and logout function
    apiService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.apiService.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
     this.loginbtn=true;
     this.logoutbtn=false
    }
  }
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout()
  {
    this.apiService.deleteToken();
    window.location.href = window.location.href;
  }
  ngOnInit(){
    
  }
     }
