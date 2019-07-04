import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedService } from './auth/services/is-logged.service'
import { IsNotLoggedService } from './auth/services/is-not-logged.service'
import { RepasDetailComponent } from './pages/repas-detail/repas-detail.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    
    // {
    //   path: 'auth',
    //   loadChildren: './auth/auth.module#AuthModule',
    //   // canActivate: [IsNotLoggedService]
    // }, 

    {
      path: 'repas/:id',
      component: RepasDetailComponent
      // canActivate: [IsLoggedService]

    },
    {
      path: 'checkout',
      component: CheckOutComponent
      // canActivate: [IsLoggedService]

    },

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