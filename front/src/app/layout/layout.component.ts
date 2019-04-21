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

  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
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

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  logout(){
    this.auth_service.changeAuthStatus(false)
    this.token_service.removeToken()
    this.router.navigateByUrl('/auth/login'); 
  }

}
