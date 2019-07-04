import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '../../../node_modules/@angular/router';
import { environment } from "./../../environments/environment";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepasService {
  commande:any[]=[];
  prix_total=0;
  url:string = environment.api;
  repas:any[]=[];
  accompanies:any[]=[];
  repasSelected:any;
  categories:any[];
  // observable to listen to like & dislike events
  private refreshListSubject = new Subject();
  refreshListObservable = this.refreshListSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router) { }

  
  getRepas() {
    return this.http.get(this.url+'/repas');
  }


  getRepa(repas) {
    return this.http.get(this.url+'/repa/'+repas.id).subscribe(
      (response:any)=>{
       this.repasSelected=response;
       this.repas.push(this.repasSelected);
       console.log(this.repas);
       this.router.navigate(['/repas/'+repas.id]);
      },
      (error)=>{ },
    );
  }

  getAccompagners() {
    return this.http.get(this.url+'/accompagners');
  }

  getCategories() {
    return this.http.get(this.url+'/categories');
  }


  setRepasList(repas: any[]): void {
		this.repas = repas;
  }
  getRepasList() {
		return this.repas;
  }
  
  setCategoriesList(cat: any[]): void {
		this.categories = cat;
  }
  getCategList() {
		return this.categories;
  }
  


 

  
  
}
