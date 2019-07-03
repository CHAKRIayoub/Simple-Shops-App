import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedService } from './auth/services/is-logged.service'
import { IsNotLoggedService } from './auth/services/is-not-logged.service'


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    
    // {
    //   path: 'auth',
    //   loadChildren: './auth/auth.module#AuthModule',
    //   // canActivate: [IsNotLoggedService]
    // }, 

    // {
    //   path: 'shops',
    //   loadChildren: './pages/shops/shops.module#ShopsModule',
    //   canActivate: [IsLoggedService]

    // },

    {
      path: 'index',
      loadChildren: './pages/index/index.module#IndexModule',
    },
    { path: '**', redirectTo: '/index' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }