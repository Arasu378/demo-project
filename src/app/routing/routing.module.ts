import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from '../first/first.component';
import {ListComponent} from '../list/list.component';
import {ParentComponent} from '../parent/parent.component';
import {AuthGuard} from '../interceptors/auth-guard.service';
import {ListDetailsComponent} from '../list-details/list-details.component';
import {UsersComponent} from '../users/users.component';
import {UsersListComponent} from '../users/users-list/users-list.component';
import {UserComponent} from '../users/user/user.component';
import {ChartsComponent} from '../charts/charts.component';

const routes: Routes = [
  { path: 'home', component: ListComponent, children: [
    {path: 'details', component: ListDetailsComponent}
  ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  { path: 'parent', component: ParentComponent, canActivate: [AuthGuard]  },
  { path: 'users', component: UsersComponent, children: [
    { path: 'list', component: UsersListComponent }
  ] },
  { path: 'user', component: UserComponent},
  { path: 'userEdit/:id', component: UserComponent},
  { path: 'chart', component: ChartsComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
