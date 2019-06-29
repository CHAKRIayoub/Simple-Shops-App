import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/auth/services/token.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  logged:boolean;
  userName:string = '';
  subscriptions: Subscription[] = [];
  tplModal: NzModalRef;
  tplModalButtonLoading = false;


  constructor(
    private auth_service:AuthService,
    private token_service:TokenService,
    private router:Router,
    private modalService: NzModalService,
  ) { 
    this.logged = this.token_service.loggedIn();
    if(this.logged) this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  
  ngOnInit() {
    
    // listen for login or logout events
    this.subscriptions.push(this.auth_service.authStatut.subscribe(
      (data)=>{ 
        this.logged = data;  
        if(this.logged) this.userName = JSON.parse(localStorage.getItem('user')).name;
      }
    ));

  }


  logout(){
  
    this.auth_service.changeAuthStatus(false)
    this.token_service.removeToken()
    this.userName = ''
    this.router.navigateByUrl('/auth/login'); 
  
  }


  ngOnDestroy(){
		this.subscriptions.forEach((subscription)=>{
			subscription.unsubscribe();
		})
  }
  
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

}
