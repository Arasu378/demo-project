import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './AuthInterceptor';
import {LoggingInterceptor} from './LoggingInterceptor';
import {RequestCacheService} from '../cache/request-cache.service';
import {RequestCache} from '../cache/RequestCache';

export const HttpInterceptorsProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
  {provide: RequestCache, useClass: RequestCacheService}
];
