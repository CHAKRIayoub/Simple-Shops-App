import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component'
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ShopsService } from './services/shops.service'
import { AuthService } from './auth/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




registerLocaleData(en);

@NgModule({

  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [{ provide: NZ_I18N, useValue: en_US }, ShopsService, AuthService],
  bootstrap: [AppComponent],


})

export class AppModule { } 