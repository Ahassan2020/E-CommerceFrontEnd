import { HttpInterceptorFn } from '@angular/common/http';
import { Loading } from '../services/loading';
import { inject } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class loaderInterceptor implements HttpInterceptor {
  constructor(private _service:Loading){}
  intercept(request: HttpRequest<any>,next: HttpHandler):

  Observable<HttpEvent<any>> {
  this._service.loading()

    return next.handle(request).pipe(
delay(1000),
      finalize(()=>{

        this._service.hideLoader();
      })
    );
  }

}

