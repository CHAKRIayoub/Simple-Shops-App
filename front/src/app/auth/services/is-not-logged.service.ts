import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedService  implements CanActivate {
  
  constructor(private token_service: TokenService,   private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    console.log(this.token_service.loggedIn());
    if(this.token_service.loggedIn()==true) {
      this.router.navigate(['/index']);

    }

    return !this.token_service.loggedIn();
  }

}
