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

  constructor(
    private auth_service:AuthService,
    private token_service:TokenService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  logout(){
    this.auth_service.changeAuthStatus(false)
    this.token_service.removeToken()
    this.router.navigateByUrl('/auth/login'); 
  }

}
