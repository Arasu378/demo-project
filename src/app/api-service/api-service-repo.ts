import {Observable} from 'rxjs/Observable';
import {HttpHeaders, HttpParams} from '@angular/common/http';

export  interface  ApiServiceRepo {
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
  }): Observable<any>;

  post(methodName: string, body: Object): Observable<any>;

  put(methodName: string, body: Object): Observable<any>;

  delete(methodName: string, body: Object): Observable<any>;

  apiServiceError(error: any): Observable<any>;

}
