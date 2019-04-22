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

  registerFail: boolean = false;
  failMessage: string = 'error';

  loading:boolean=false;


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
      'password_confirmation': new FormControl(this.password_confirmation, [Validators.required]),
    });
  
  }

  submitForm(): void {
    this.loading = true;
    this.auth_service.signup(this.registerForm.value).subscribe(
        (data:any)=>{
          this.loading = false;
          this.token_service.setToken(data);
          this.auth_service.changeAuthStatus(true)
          this.router.navigateByUrl('/index'); 
        },
        (error)=>{
          this.registerFail = true;
          this.loading = true;
          this.failMessage = error.error.message;
        }
      );
  }

} 
