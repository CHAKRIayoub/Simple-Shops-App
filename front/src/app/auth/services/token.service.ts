import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class TokenService {

    private iss = {
        login: environment.api + "/api/login",
        signup: environment.api  + "/api/signup"
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
                return Object.values(this.iss).indexOf(payload.iss) > -1;
            }
        } else {
            return false;
        }
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
