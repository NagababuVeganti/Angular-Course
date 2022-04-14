/*
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtModule} from '@auth0/angular-jwt'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class AuthService {
  currentUser: any; 

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('access_token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
    .map(response => {
      let result = response.json();
      
      if (result && result.token) {
        localStorage.setItem('token', result.token);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    });
  }

  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}

*/