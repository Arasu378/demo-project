import {UserModel} from './user.model';

export class UsersResponseModel {
  isSuccess: boolean;
  user: UserModel[];
}
