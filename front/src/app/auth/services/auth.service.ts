import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post(environment.api+'/login', data)
  }

  signup(data){
    return this.http.post(environment.api+'/signup', data)
  }

}
