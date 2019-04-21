import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  name:string;
  email: String;
  password: String;
  password_confirmation: String;

  constructor(
    private auth_service:AuthService,
    private token_service:TokenService,
    private router:Router
  ) {}

  ngOnInit() : void {

    this.registerForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.password, [Validators.required]),
      'password_confirmation': new FormControl(this.password, [Validators.required]),
    });
  
  }

  submitForm(): void {
    this.auth_service.signup(this.registerForm.value).subscribe(
        (data)=>{
          console.log(data)
        },
        (error)=>{
          console.log(error)
        }
      );
  }

  login(data){
    this.auth_service.changeAuthStatus(true)
    this.token_service.setToken(data.access_token);
    this.router.navigateByUrl('/app'); 
  }

} 
