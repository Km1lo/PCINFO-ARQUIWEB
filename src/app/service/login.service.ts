import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtRequest } from '../model/jwt-request';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(request: JwtRequest) {
    return this.http.post("https://pcinfobackendaw6.onrender.com/authenticate", request);
  }
  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
  showRole(){
    let token = sessionStorage.getItem("token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.role;
  }
}
