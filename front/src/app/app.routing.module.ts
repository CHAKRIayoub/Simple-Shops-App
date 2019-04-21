import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './auth/services/guard.service'

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule',
    },
    {
      path: 'app',
      loadChildren: './layout/layout.module#LayoutModule',
      canActivate: [GuardService]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }