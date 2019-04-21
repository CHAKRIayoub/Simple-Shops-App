import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router/';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanActivate{
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if(this.token_service.loggedIn()==false) this.router.navigate(['/auth/login']);
    return this.token_service.loggedIn();
  }

  constructor(
    private router: Router,
    private token_service:TokenService,
  ) {

  }
}
