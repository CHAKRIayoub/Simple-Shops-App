import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService implements CanActivate{

  constructor(private token_service: TokenService,    private router: Router    ) { } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    if(this.token_service.loggedIn()==false) this.router.navigate(['/auth/login']);
    
    return this.token_service.loggedIn(); 

  }

}
