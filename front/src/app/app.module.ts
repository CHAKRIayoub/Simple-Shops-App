import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component'
import { AuthModule } from './auth/auth.module';
import { EmptyComponentComponent } from './pages/empty-component/empty-component.component'

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmptyComponentComponent
  ],

  imports: [
    BrowserModule,
    AuthModule,
    NgbModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { } 