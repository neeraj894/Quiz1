import { User } from './../authModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  url = 'https://user-login1.herokuapp.com/api/v1/users/register';
  signInURL = 'https://user-login1.herokuapp.com/api/v1/users/login';
  constructor(private http: HttpClient) {}

  Sign(user: User) {
    return this.http.post<any>(this.url, user);
  }
  SignIn(user: User) {
    return this.http.post<any>(this.signInURL, user);
  }
}
