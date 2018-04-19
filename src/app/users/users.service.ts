import { Injectable } from '@angular/core';
import {ApiService} from '../api-service/api.service';
import {LoggingService} from '../utils/logging.service';
import {HandleError, HttpErrorHandlerService} from '../cache/http-error-handler.service';
import {ConstantsService} from '../utils/constants-service';
import {Observable} from 'rxjs/Observable';
import {UsersResponseModel} from '../users/model/users-response.model';
import {catchError, distinctUntilChanged, map} from 'rxjs/operators';
import {UserAddResModel} from '../users/model/user-add-res.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UserModel} from "../users/model/user.model";

@Injectable()
export class UsersService {

  private handleError: HandleError;
  private userData = new BehaviorSubject<UserModel>({} as UserModel);
  public userPublicData = this.userData.asObservable().pipe(distinctUntilChanged());

  constructor(private apiService: ApiService,
              private logger: LoggingService,
              private httpErrorHandler: HttpErrorHandlerService,
              private constants: ConstantsService) {
      this.handleError =  this.httpErrorHandler.createHandleError('usersListService');
  }

  getUsersList(): Observable<UsersResponseModel> {
    const methodName = `${this.constants.usersGetAll}`;
    return this.apiService.get(methodName)
      .pipe(
        map((response: UsersResponseModel) => {
          this.logger.setConsoleLog(response);
          return response;
        }),
        catchError(this.handleError('userListError', new UsersResponseModel()))
      );
  }
  insertUser(object: Object): Observable<UserAddResModel> {
    const methodName = `${this.constants.insertUser}`;
    return this.apiService.post(methodName, object)
      .pipe(
        map((response: UserAddResModel) => {
          this.logger.setConsoleLog(response);
          return response;
        }),
        catchError(this.handleError('userInsertError', new UserAddResModel()))
      );
  }
  userDataHolder(userModel: UserModel): void {
    this.userData.next(userModel);
  }
  updateUser(object: Object, userId: string): Observable<UserAddResModel> {
    const methodName = `${this.constants.updateUser}${userId}`;
    return this.apiService.put(methodName, object)
      .pipe(
        map((response: UserAddResModel) => {
          this.logger.setConsoleLog(response);
          return response;
        }),
        catchError(this.handleError('userUpdateError', new UserAddResModel()))
      );
  }
}
