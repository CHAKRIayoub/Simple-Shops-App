import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShopsComponent } from './shops.component';
import { ShopComponent } from './shop/shop.component';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
      path: "",
      component: ShopComponent,
  },

];

@NgModule({
  declarations: [ListShopsComponent, ShopComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
  ]
})

export class ShopsModule { }
