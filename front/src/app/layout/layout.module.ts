import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';

import { routing } from './layout.routing';

@NgModule({

  imports: [ 
    CommonModule, 
    routing,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],

})
export class LayoutModule { }
