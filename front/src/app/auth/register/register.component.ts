import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  password2: String;

  constructor() {}

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.password, [Validators.required]),
      'password2': new FormControl(this.password, [Validators.required]),
    });
  
  }

  submitForm(): void {
    
  }

}
