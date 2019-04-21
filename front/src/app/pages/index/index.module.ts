import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndexComponent } from './index.component';


const routes: Routes = [
  {
      path: "",
      component: IndexComponent,
  },
];

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
  ]
})

export class IndexModule { }
