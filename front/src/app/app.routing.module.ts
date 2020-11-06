import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedService } from './auth/services/is-logged.service'
import { IsNotLoggedService } from './auth/services/is-not-logged.service'


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      canActivate: [IsNotLoggedService]
    }, 

    {
      path: 'shops',
      loadChildren: () => import('./pages/shops/shops.module').then(m => m.ShopsModule),
      canActivate: [IsLoggedService]

    },

    {
      path: 'index',
      loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
      canActivate: [IsLoggedService]
    },
    { path: '**', redirectTo: '/index' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }