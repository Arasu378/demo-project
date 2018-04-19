import {Injectable, Injector} from '@angular/core';
import {UsersResponseModel} from '../users/model/users-response.model';
import {Observable} from 'rxjs/Observable';
import {UserAddResModel} from '../users/model/user-add-res.model';
import {UserModel} from '../users/model/user.model';
import {UsersService} from '../users/users.service';

@Injectable()
export class FacadeService {

  private _userService: UsersService;

  public getUserService(): UsersService {
    if (!this._userService) {
      this._userService =  this.injector.get(UsersService);
    }
    return this._userService;
  }

  constructor(private injector: Injector) { }

  getUsersList(): Observable<UsersResponseModel> {
    return this._userService.getUsersList();
  }

  insertUser(object: Object):  Observable<UserAddResModel> {
    return this._userService.insertUser(object);
  }
  updateUser(object: Object, userId: string): Observable<UserAddResModel> {
    return this._userService.updateUser(object, userId);
  }
  userDataHolder(userModel: UserModel): void {
    this._userService.userDataHolder(userModel);
  }
}
