import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

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
    this.token_service.setToken(data.access_token)
  }

}
