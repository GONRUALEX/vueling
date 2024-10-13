import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { SECURITY_KEY } from '@shared/utils/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = req.headers.set(SECURITY_KEY, this._authService!.getkey())
    const reqClone = req.clone({ headers });
    return next.handle(reqClone);
  }
}
