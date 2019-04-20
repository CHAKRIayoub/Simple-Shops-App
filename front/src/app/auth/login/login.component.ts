import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.password, [Validators.required]),
    });
  
  }

  submitForm(): void {

      this.http.post('http://localhost:8000/api/login', this.loginForm.value).subscribe(
        (data)=>{console.log(data)},
        (error)=>{
          this.loginFail = true;
        }
      );
      
  }

}
