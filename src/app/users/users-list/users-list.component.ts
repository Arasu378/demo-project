import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UserModel} from '../model/user.model';
import {Router} from '@angular/router';
import {LoggingService} from '../../utils/logging.service';
import {FacadeService} from '../../api-service/facade.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public userList: UserModel[];
  public pageNo = 1;
  public columnUserList: ['#', 'User Name', 'Email', 'Mobile', 'Profile'];

  constructor(private facadeService: FacadeService,
              private router: Router,
              private logger: LoggingService) { }

  ngOnInit() {
    this.facadeService.getUserService();
    this.subscription =  this.facadeService.getUsersList()
      .subscribe(
        response => {
          this.userList = response.user;
        }, error2 => {
          this.logger.setConsoleLog(error2);
        }
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onEdit(user: UserModel): void {
    this.facadeService.userDataHolder(user);
    this.router.navigate(['/userEdit', user.id]);
  }
  onAdd(): void {
    this.router.navigate(['']);
  }

}

