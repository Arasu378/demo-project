import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import {ServiceModule} from './services/service.module';
import {UsersModule} from './users/users.module';
import {ChartsModule} from './charts/charts.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ParentComponent,
    ListComponent,
    ListDetailsComponent,
    ListItemComponent
  ],
  imports: [
    ServiceModule,
    UsersModule,
    ChartsModule
    // NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
