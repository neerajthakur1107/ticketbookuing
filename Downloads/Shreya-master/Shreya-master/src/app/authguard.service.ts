import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private router : Router) { }

  public login(data: any){
    localStorage.setItem('ACCESS_TOKEN', data);
  }

  public isLoggedIn(){
    if(localStorage.getItem('ACCESS_TOKEN') == null){
      return  this.router.navigateByUrl('/login');
       }
       else{
    return localStorage.getItem('ACCESS_TOKEN') !== null;

       }
      }
}
