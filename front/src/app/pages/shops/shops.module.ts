import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShopsComponent } from './list-shops/list-shops.component';
import { ShopComponent } from './shop/shop.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
      path: "",
      component: ShopComponent,
      children: [
          {
              path: "",
              component: ShopComponent

          }

      ]
  },

];

@NgModule({
  declarations: [ListShopsComponent, ShopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})

export class ShopsModule { }
