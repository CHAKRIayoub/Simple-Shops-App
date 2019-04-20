import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { routing } from './layout.routing';

@NgModule({

  imports: [
    CommonModule, 
    routing,
    NgZorroAntdModule,

  ],
  
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],

  exports : [
    NgZorroAntdModule,

  ]

})
export class LayoutModule { }
