import { Injectable } from '@angular/core';
import {ApiService} from '../api-service/api.service';
import {LoggingService} from '../utils/logging.service';
import {HandleError, HttpErrorHandlerService} from '../cache/http-error-handler.service';
import {Observable} from 'rxjs/Observable';
import {ListResponse} from '../list/model/list-response.model';
import {ConstantsService} from '../utils/constants-service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {catchError, distinctUntilChanged, map} from 'rxjs/operators';

@Injectable()
export class RestaurantListService {
  private restaurantData = new BehaviorSubject<ListResponse>({} as ListResponse);
  public restaurantPublicData =  this.restaurantData.asObservable().pipe(distinctUntilChanged());
  private handleError: HandleError;
  constructor(private apiService: ApiService,
              private logger: LoggingService,
              private httpErrorHandler: HttpErrorHandlerService,
              private constants: ConstantsService) {
      this.handleError =  this.httpErrorHandler.createHandleError('restaurantListService');
  }
  getRestaurantList(lat: number, lon: number): Observable<ListResponse> {
    const methodName = `${this.constants.restaurantList}?lat=${lat}&lon=${lon}`;
    return this.apiService.get(methodName)
      .pipe(
        map((response: ListResponse) => {
          this.restaurantData.next(response);
          this.logger.setConsoleLog('mapping data');
          return response;
        }),
        catchError(this.handleError('restaurantListError', new ListResponse())
      ));
  }

}
