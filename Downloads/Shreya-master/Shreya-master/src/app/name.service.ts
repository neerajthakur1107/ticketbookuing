import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class NameService {
 
  registerCompany(company: Company): Observable<Company>{
    return this.httpClient.post<Company>(`http://localhost/gitpull/Shreya/src/app/shreya/company_register.php`, company);
  }
  sendOTP(Email: Company): Observable<Company> {
    return this.httpClient.post<Company>(`http://localhost/gitpull/Shreya/src/app/shreya/sendOTP.php`,Email);
  }
  resetpassword(set:Company):Observable<Company>{
    return this.httpClient.post<Company>(`http://localhost/gitpull/Shreya/src/app/shreya/resetpassword.php`,set);
  }
  changePassword(email: any) {
    return this.httpClient.post(`http://localhost/gitpull/Shreya/src/app/shreya/forgotpassword.php`, email);
  }
  
  
 constructor(private httpClient: HttpClient) { }
 
}
