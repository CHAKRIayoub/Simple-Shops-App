import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedService } from './auth/services/is-logged.service'
import { IsNotLoggedService } from './auth/services/is-not-logged.service'


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule',
      canActivate: [IsNotLoggedService]
    }, 

    {
      path: 'app',
      loadChildren: './layout/layout.module#LayoutModule',
      canActivate: [IsLoggedService]

    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }