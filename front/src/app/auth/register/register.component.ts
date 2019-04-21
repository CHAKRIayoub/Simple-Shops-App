import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.password, [Validators.required]),
      'password_confirmation': new FormControl(this.password, [Validators.required]),
    });
  
  }

  submitForm(): void {
    this.http.post('http://localhost:8000/api/signup', this.registerForm.value).subscribe(
        (data)=>{
          console.log(data)
        },
        (error)=>{
          console.log(error)
        }
      );
  }

}
