import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  url:string = environment.api + '/shops';
  private refreshListSubject = new Subject();
  refreshListObservable = this.refreshListSubject.asObservable();

  constructor(private http: HttpClient) { }

  getShops() {
    let userId = JSON.parse(localStorage.getItem('user')).id;
    return this.http.get(this.url+'?userId='+userId);
  }

  like(id, liked) {
    let data = {
      shop_id : id,
      user_id : JSON.parse(localStorage.getItem('user')).id
    }
    let likeOrDislike = (liked)?'/like':'/dislike';
    return this.http.post(this.url+likeOrDislike,data);
  }

  refreshList() {
    this.refreshListSubject.next(); 
    console.log('service');
  }
  
}
