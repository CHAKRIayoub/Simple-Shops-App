import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/auth/services/token.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepasService } from 'src/app/services/repas.service';
import { NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  prix_total=0;
  commande;
  logged:boolean;
  userName:string = '';
  subscriptions: Subscription[] = [];
  isLoginVisible = false;
  isRegisterVisible = false;
  isConfirmLoading = false;
  loginForm: FormGroup;
  email: String;
  password: String;
  loginFail: boolean = false;
  loading:boolean=false;

  registerForm: FormGroup;
  name:string;
  remail: String;
  rpassword: String;
  password_confirmation: String;
  registerFail: boolean = false;
  failMessage: string = 'erreur';

  constructor(
    private auth_service:AuthService,
    private token_service:TokenService,
    private router:Router,
    private repasService:RepasService,
    private notification: NzNotificationService,
  ) {
    this.prix_total=this.repasService.prix_total;
    this.logged = this.token_service.loggedIn();
    if(this.logged) this.userName = JSON.parse(localStorage.getItem('user')).name;
    this.commande=this.repasService.commande;


    this.auth_service.openModalObservable.subscribe(()=>{
      this.showModal();
    });

  }
  
  ngOnInit() {
    
    // listen for login or logout events
    this.subscriptions.push(this.auth_service.authStatut.subscribe(
      (data)=>{ 
        this.logged = data;  
        if(this.logged) this.userName = JSON.parse(localStorage.getItem('user')).name;
      }
    ));

    this.loginForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.password, [Validators.required]),
    });

    this.registerForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'remail': new FormControl(this.remail, [Validators.required, Validators.email]),
      'rpassword': new FormControl(this.rpassword, [Validators.required]),
      'password_confirmation': new FormControl(this.password_confirmation, [Validators.required]),
    });

  }

  submitForm(): void {

    this.loading = true;
    this.subscriptions.push(this.auth_service.login(this.loginForm.value).subscribe(
      (data:any) => {
        this.token_service.setToken(data);
        this.auth_service.changeAuthStatus(true)
        this.loading = false;
        this.isLoginVisible = false;
        this.isRegisterVisible = false;
        this.notification.create(
          'success',
          'Notification',
          'Connexion a été effectuée avec succes, confirmer votre commande !! '
        );
      },
      (error)=>{
        this.loginFail = true;
        this.loading = false;
      }
    ))

  }

  handleCancel(){
    
    this.isLoginVisible = false; 
    this.isRegisterVisible = false;
  }


  logout(){
  
    this.auth_service.changeAuthStatus(false)
    this.token_service.removeToken()
    this.userName = ''
  
  }


  ngOnDestroy(){
		this.subscriptions.forEach((subscription)=>{
			subscription.unsubscribe();
		})
  }
  
  showModal(): void {
    this.isLoginVisible = true;
    this.isRegisterVisible = false;
  }

  showRegisterModal(){
    this.isRegisterVisible = true;
    this.isLoginVisible = false;
  }

  submitRegisterForm(): void {

    this.loading = true;
    this.subscriptions.push(this.auth_service.signup(this.registerForm.value).subscribe(
        (data:any)=>{
          this.loading = false;
          this.token_service.setToken(data);
          this.auth_service.changeAuthStatus(true)
          this.isLoginVisible = false;
          this.isRegisterVisible = false;
        },
        (error)=>{
          this.registerFail = true;
          this.loading = false;
          this.failMessage = error.error.message;
        }
      ));

  }
  getPrixtotal(){
    this.prix_total=this.repasService.prix_total;
    return this.prix_total;
  }

}
