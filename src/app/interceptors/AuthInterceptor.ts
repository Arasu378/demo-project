import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StorageService} from '../utils/storage.service';
import {LoggingService} from '../utils/logging.service';
import {environment} from "../../environments/environment";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService, private  logger: LoggingService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const userKey = environment.userKey;
   const authToken =  environment.authKey;
   const domain =  environment.domain;
   const contentType = this.storage.getContentType();
   if (userKey != null && authToken != null && domain != null) {
      this.logger.setConsoleLog('Headers : ' + domain + ' / / ' + authToken );
     const  authReq =  req.clone({
       headers: new HttpHeaders()
       //  .set('user-key', userKey)
         .set('Authorization', authToken)
         .set('Domain', domain)
     });
     return next.handle(authReq);
   } else {
     return next.handle(req);
   }

  }

}


