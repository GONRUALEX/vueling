import { APP_INITIALIZER, Provider } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

export function authInitializerFactory(authService: AuthService): () => Promise<boolean> {
  return (): Promise<boolean> => {
    return authService.isKeyInLocalStorage();
  };
}

export const AuthInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: authInitializerFactory,
  deps: [AuthService],
  multi: true
};