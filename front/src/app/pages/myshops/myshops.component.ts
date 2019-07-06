import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-index',
  templateUrl: './myshops.component.html',
  styleUrls: ['./myshops.component.css']
})
export class myshopsComponent implements OnInit {
  mycommandes;
  constructor( private repasService:RepasService ,private http: HttpClient,) { 
    this.repasService.getmyCommandes(1).subscribe(
      (response:any)=>{
       this.mycommandes=response;
       console.log(this.mycommandes);
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
