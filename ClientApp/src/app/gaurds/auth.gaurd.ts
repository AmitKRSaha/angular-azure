import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth0/auth.services';
import { Router } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }

  }
}