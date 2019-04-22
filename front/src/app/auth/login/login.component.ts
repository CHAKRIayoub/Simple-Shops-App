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
  loading:boolean=false;

  
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
      this.loading = true;
      this.auth_service.login(this.loginForm.value).subscribe(
        (data:any) => {
          this.token_service.setToken(data);
          this.auth_service.changeAuthStatus(true)
          this.router.navigateByUrl('/index'); 
          this.loading = false;

        },
        (error)=>{
          this.loginFail = true;
          this.loading = false;
        }
      );

  }


}
