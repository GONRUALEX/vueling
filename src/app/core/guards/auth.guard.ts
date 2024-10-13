import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { WarningType } from '@shared/models/types/warningType';
import { WarningServiceService } from '@shared/services/warning-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router, private warningService: WarningServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    if (!this._authService.isLoggedIn()){
      this._router.navigateByUrl('/');
      this.warningService.showMessage("No estás autorizado para ver esta página", WarningType.Error);
      return false;
    }
    
    return true;
  }
  
}
