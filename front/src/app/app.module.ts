import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './routes/app.routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component'

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { } 