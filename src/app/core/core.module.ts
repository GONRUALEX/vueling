import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthInitializerProvider } from "@core/initializer/sessionInitzializer";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "@core/interceptors/auth.interceptor";
import { ErrorsInterceptor } from "@core/interceptors/errors.interceptor";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthInitializerProvider,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
