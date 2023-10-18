import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from '../../services/error-service/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private route: Router, private errorService: ErrorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorService.setErrorMsg(error.message);
        this.errorService.setErrorCode(error.status);

        console.log(this.route.url.includes('/movie-details/'));
        if (this.route.url !== '/') {
          this.route.navigate([`${error.status}`]);
        }

        return throwError(error.message);
      })
    );
  }
}
