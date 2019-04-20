import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule',
    },
    {
      path: 'app',
      loadChildren: './layout/layout.module#LayoutModule',
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }