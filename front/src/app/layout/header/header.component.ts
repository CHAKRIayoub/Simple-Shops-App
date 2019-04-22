import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/auth/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged:boolean;
  userName:string = '';

  constructor(
    private auth_service:AuthService,
    private token_service:TokenService,
    private router:Router,
  ) { 

    this.logged = this.token_service.loggedIn();
    if(this.logged) this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  ngOnInit() {

    

    this.auth_service.authStatut.subscribe(
      (data)=>{ 
        this.logged = data;  
        if(this.logged) this.userName = JSON.parse(localStorage.getItem('user')).name;
      }
    );

  }

  logout(){
    this.auth_service.changeAuthStatus(false)
    this.token_service.removeToken()
    this.userName = ''
    this.router.navigateByUrl('/auth/login'); 
  }

}
