import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { LayoutComponent } from './layout.component'

const routes: Routes = [
  { path: '', component: LayoutComponent },  
  { path: 'shops', loadChildren: '../pages/shops/shops.module#ShopsModule', }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
