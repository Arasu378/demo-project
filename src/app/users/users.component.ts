import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoggingService} from '../utils/logging.service';
import {FacadeService} from '../api-service/facade.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private facadeService: FacadeService,
              private router: Router,
              private logger: LoggingService) { }

  ngOnInit() {

  }

}
