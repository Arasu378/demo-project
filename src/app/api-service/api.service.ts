import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoggingService} from '../utils/logging.service';
import {environment} from '../../environments/environment';
import {ApiServiceRepo} from './api-service-repo';
import {catchError, map} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {RequestCache} from "../cache/RequestCache";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ApiService implements ApiServiceRepo {
  private cache: Map<string, CacheContent> = new Map<string, CacheContent>();
  private usersObservables: Map<string, Subject<any>> = new Map<string, Subject<any>>();
  readonly DEFAULT_MAX_AGE: number = 30000;

  constructor(private httpClient: HttpClient,
              private logger: LoggingService) {
  }

  get(methodName: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<any> {
    const url = `${environment.teamConnectUrl}${methodName}`;
      this.logger.setConsoleLog(url);
      return this.httpClient.get(url)
        .pipe(map((response: any) => {
          this.logger.setConsoleLog(response);
          return response;
        }), catchError(this.apiServiceError));
  }

  post(methodName: string, body: Object): Observable<any> {
    const url = `${environment.teamConnectUrl}${methodName}`;
    this.logger.setConsoleLog(url);
    return this.httpClient.post(url, body)
      .pipe(catchError(this.apiServiceError));
  }

  put(methodName: string, body: Object): Observable<any> {
    const url = `${environment.teamConnectUrl}${methodName}`;
    this.logger.setConsoleLog(url);
    return this.httpClient.put(url, body)
      .pipe(catchError(this.apiServiceError));
  }

  delete(methodName: string, body: Object): Observable<any> {
    return undefined;
  }
  apiServiceError(error: any): Observable<any> {
    return new ErrorObservable(error.error);
  }

}
