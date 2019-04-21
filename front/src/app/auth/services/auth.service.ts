import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../services/token.service';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.token_service.loggedIn() );
  authStatut = this.loggedIn.asObservable();

  constructor(
    private http: HttpClient,
    private token_service:TokenService,
   ) { }

  login(data){
    return this.http.post(environment.api+'/login', data)
  }

  signup(data){
    return this.http.post(environment.api+'/signup', data)
  }

  changeAuthStatus(value:boolean){
    this.loggedIn.next(value);
  }

}
