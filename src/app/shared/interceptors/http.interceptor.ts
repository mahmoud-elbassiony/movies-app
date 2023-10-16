import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newParams = new HttpParams({ fromString: request.params.toString() });
    newParams = newParams.append('api_key', '0b9792e54b272d503e5d901491b4430e');

    const requestClone = request.clone({
      params: newParams,
    });
    return next.handle(requestClone);
  }
}
