import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: String;
  password: String;
  loginFail: boolean = false;
  
  constructor(
    private auth_service:AuthService,
    private token_service:TokenService,
    private router:Router,
  ){}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.password, [Validators.required]),
    });
  
  } 

  submitForm(): void {

      this.auth_service.login(this.loginForm.value).subscribe(
        (data) => this.login(data),
        (error)=>{
          this.loginFail = true;
        }
      );

  }

  login(data){
    this.auth_service.changeAuthStatus(true)
    this.token_service.setToken(data.access_token);
    this.router.navigateByUrl('/app'); 
  }

}
