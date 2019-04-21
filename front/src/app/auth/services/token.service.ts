import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class TokenService {

    private links = {
        login: environment.api + "/login",
        signup: environment.api  + "/signup"
    };


    constructor(
        // private http: HttpClient
    ){ }

    setToken(token){
        localStorage.setItem('token', token);
    }


    getToken() {
        return localStorage.getItem('token');
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    isTokenValid() {
        const token = this.getToken();
        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return this.links.login == payload.iss || this.links.signup == payload.iss; 
            }
        }
        return false;
    }

    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }

    loggedIn() {
        return this.isTokenValid();
    }

}
