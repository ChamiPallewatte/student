import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  constructor(@Inject('API') private baseUrl: string) {} // constructor

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Skip if base URL is there
    if (req.url.startsWith(this.baseUrl)) {
      return next.handle(req);
    }

    const apiReq = req.clone({
      url: `${this.baseUrl}${req.url}`,
    });

    return next.handle(apiReq);
  } // intercept
} // class
