import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  url:string = environment.api + '/shops';
  userId = '?userId='+JSON.parse(localStorage.getItem('user')).id;

  constructor(private http: HttpClient) { }

  getShops() {
    return this.http.get(this.url+this.userId);
  }

  like() {
    return this.http.post(this.url,{});
  }
  
}
