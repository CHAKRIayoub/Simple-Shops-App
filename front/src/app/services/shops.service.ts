import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  url:string = environment.api + '/shops';
  userId = JSON.parse(localStorage.getItem('user')).id;

  constructor(private http: HttpClient) { }

  getShops() {
    return this.http.get(this.url+'?userId='+this.userId);
  }

  like(id, liked) {
    let data = {
      shop_id : id,
      user_id : this.userId
    }
    let likeOrDislike = (liked)?'/like':'/dislike';
    return this.http.post(this.url+likeOrDislike,data);
  }
  
}
