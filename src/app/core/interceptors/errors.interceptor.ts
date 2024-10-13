import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ErrorHttpService } from "@core/services/error-http.service";
import { catchError, finalize, map, timeout } from "rxjs/operators";
import { APP_XHR_TIMEOUT } from "@shared/utils/constants";

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(private errorHttpService: ErrorHttpService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.performRequest(request)).pipe(
      timeout(APP_XHR_TIMEOUT),
      map((event: HttpEvent<any>) => this.handleSuccessfulResponse(event)),
      catchError((error: HttpErrorResponse) =>
        this.processRequestError(error, request, next)
      ),
      finalize(this.handleRequestCompleted.bind(this))
    );
  }

  private performRequest(request: HttpRequest<any>): HttpRequest<any> {
    let headers: HttpHeaders = request.headers;
    return request.clone({ headers });
  }

  private handleSuccessfulResponse(event: HttpEvent<any>): HttpEvent<any> {
    if (event instanceof HttpResponse && event.body !== null) {
      event = event.clone({ body: event.body.response });
    }
    return event;
  }

  private processRequestError(
    error: HttpErrorResponse,
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.errorHttpService.handleError(error);
    return throwError(() => error);
  }

  private handleRequestCompleted(): void {
    //finaliza
  }
}
