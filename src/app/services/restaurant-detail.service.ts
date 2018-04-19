import { Injectable } from '@angular/core';
import {ApiService} from '../api-service/api.service';
import {HandleError, HttpErrorHandlerService} from '../cache/http-error-handler.service';
import {LoggingService} from '../utils/logging.service';
import {ConstantsService} from '../utils/constants-service';
import {Observable} from 'rxjs/Observable';
import {RestaurantModel} from '../list/model/restaurant.model';
import {catchError, distinctUntilChanged, map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class RestaurantDetailService {
  private restaurantData = new BehaviorSubject<RestaurantModel>({} as RestaurantModel);
  public restaurantPublicData =  this.restaurantData.asObservable().pipe(distinctUntilChanged());

  private handleError: HandleError;
  constructor(private apiService: ApiService,
              private logger: LoggingService,
              private httpErrorHandler: HttpErrorHandlerService,
              private constants: ConstantsService) {
    this.handleError =  this.httpErrorHandler.createHandleError('restaurantDetailsService');
  }
  getRestaurantDetails(restaurantId: number): Observable<RestaurantModel> {
    const methodName = `${this.constants.restaurantDetails}?res_id=${restaurantId}`;
    return this.apiService.get(methodName)
      .pipe(
        map((response: RestaurantModel) => {
          this.logger.setConsoleLog('mapping data');
          return response;
        }),
        catchError(this.handleError('restaurantDetailsError', new RestaurantModel()))
      );
  }

}
