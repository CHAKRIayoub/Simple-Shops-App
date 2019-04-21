import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './auth.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { IsLoggedService } from './services/is-logged.service';
import { IsNotLoggedService } from './services/is-not-logged.service';


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
    AuthService,
    TokenService,
    IsLoggedService,
    IsNotLoggedService
  ]

})
export class AuthModule { }
