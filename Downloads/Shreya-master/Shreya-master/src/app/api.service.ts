import { Injectable,Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: any;
 
  baseUrl:string = "http://localhost/gitpull/Shreya/src/app/shreya";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  userlogin(loginData:any) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', loginData)
      .pipe(map(Company => {
            this.setToken(Company[0].name);
            this.getLoggedInName.emit(true);
            return Company;
        }));
}
//token
setToken(token: string) {
  localStorage.setItem('token', token);
}
 
getToken() {
  return localStorage.getItem('token');
}
 
deleteToken() {
  localStorage.removeItem('token');
}
 
isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
    return true
  }
  return false;
}
}
