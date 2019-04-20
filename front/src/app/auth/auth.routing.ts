import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes) 
