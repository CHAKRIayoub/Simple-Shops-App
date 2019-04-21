import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './auth.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service'


@NgModule({

  imports: [
    CommonModule, 
    routing,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],

  providers:[
    AuthService
  ]

})
export class AuthModule { }
