import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module'
import { 
  // NgZorroAntdModule, 
  NZ_I18N, 
  en_US 
} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en'

registerLocaleData(en);

@NgModule({

  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    // AuthModule,
    // LayoutModule, 
    AppRoutingModule,
    // NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],

  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],

  // exports:[NgZorroAntdModule]

})

export class AppModule { } 