import { NgModule } from '@angular/core';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersComponent} from './users.component';
import {UserComponent} from './user/user.component';
import {SharedModule} from '../shared/shared.module';
import {UsersService} from './users.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UsersListComponent,
    UsersComponent,
    UserComponent
  ],
  exports: [
    UsersListComponent,
    UsersComponent,
    UserComponent,
    SharedModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
