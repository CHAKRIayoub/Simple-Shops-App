import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponentComponent } from './pages/empty-component/empty-component.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'content' },
    { path: 'content', component: EmptyComponentComponent },
    {
      path: 'login',
      loadChildren: './auth/auth.module#AuthModule',
    },
    // { path: '', redirectTo: 'index', pathMatch: 'full' },
    // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    // { path: '404', component: notFoundComponent, canActivate: [AuthGuard] },
    // { path: 'resetPassword', component: ResponseReset },
    // { path: 'logout', component: LogoutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }