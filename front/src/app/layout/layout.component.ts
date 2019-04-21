import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { TokenService } from '../auth/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

 
  logged:boolean;

  constructor(    
    private auth_service:AuthService,
    private token_service:TokenService,
    private router:Router,
  ){}

  ngOnInit(){

    this.auth_service.authStatut.subscribe(
      (data)=>{ this.logged = data }
    );
    
  }



  

}
