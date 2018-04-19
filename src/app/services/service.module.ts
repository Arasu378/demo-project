import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageService} from '../utils/message.service';
import {HttpInterceptorsProviders} from '../interceptors/HttpInterceptorsProviders';
import {RestaurantListService} from './restaurant-list.service';
import {LoggingService} from '../utils/logging.service';
import {HttpErrorHandlerService} from '../cache/http-error-handler.service';
import {ApiService} from '../api-service/api.service';
import {FacadeService} from '../api-service/facade.service';
import {RestaurantDetailService} from './restaurant-detail.service';
import {AuthGuard} from '../interceptors/auth-guard.service';
import {ConstantsService} from '../utils/constants-service';
import {StorageService} from '../utils/storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MessageService, LoggingService, HttpErrorHandlerService
  , HttpInterceptorsProviders
    , LoggingService, StorageService, ApiService, RestaurantListService, ConstantsService, AuthGuard, RestaurantDetailService,
     FacadeService
  ]
})
export class ServiceModule { }
