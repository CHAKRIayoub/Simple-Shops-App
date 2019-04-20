import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { LayoutComponent } from './layout.component'

const routes: Routes = [
  { path: '', component: LayoutComponent }, 
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes) 
