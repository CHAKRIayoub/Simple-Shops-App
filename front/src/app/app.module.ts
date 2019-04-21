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
    NgZorroAntdModule
  ],

  providers: [{ provide: NZ_I18N, useValue: en_US }, ShopsService],
  bootstrap: [AppComponent],


})

export class AppModule { } 