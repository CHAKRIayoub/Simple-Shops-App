import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/auth/services/token.service';
@Component({
  selector: 'app-index',
  templateUrl: './myshops.component.html',
  styleUrls: ['./myshops.component.css']
})
export class myshopsComponent implements OnInit {
  mycommandes;
  logged:boolean;
  userID;
  constructor( private repasService:RepasService ,private http: HttpClient,private token_service:TokenService) { 
    this.logged = this.token_service.loggedIn();
    if(this.logged) this.userID = JSON.parse(localStorage.getItem('user')).id;
    this.repasService.getmyCommandes(this.userID).subscribe(
      (response:any)=>{
       this.mycommandes=response;
       console.log(response);
      },
      (error)=>{ },
    );
  }

  ngOnInit() {
    
  }

  getEtat(state_id){
    if(state_id==1){
      return "EN ATTENT";
    }
    if(state_id==2){
      return "ANNULE";
    }
    if(state_id==3){
      return "EN COURS";
    }
    if(state_id==4){
      return "PREPAREE";
    }
    if(state_id==5){
      return "FERMER";
    }
  }




}
