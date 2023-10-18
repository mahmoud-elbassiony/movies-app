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
        // Handle the error here
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        this.errorService.setErrorMsg(error.message);
        this.errorService.setErrorCode(error.status);
        console.log(errorMsg);

        console.log(this.route.url.includes('/movie-details/'));
        if (this.route.url !== '/') {
          this.route.navigate([`${error.status}`]);
        }

        return throwError(errorMsg);
      })
    );
  }
}
