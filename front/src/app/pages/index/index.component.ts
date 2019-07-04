import { Component, OnInit } from '@angular/core';
import { RepasService } from 'src/app/services/repas.service';
import { environment } from "./../../../environments/environment";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  repas:any[];
  logocategorie=environment.logoCatgorie;
  constructor(
    private repasService:RepasService,
    public _d: DomSanitizer) { 
      
      this.repasService.getRepas().subscribe(
      (response:any)=>{
       this.repas=response;
       console.log(this.repas);
      },
      (error)=>{ },
    ); 
  }

  ngOnInit() {
   
  }
  gotoRepa(repa){
    this.repasService.getRepa(repa);
  }

}
