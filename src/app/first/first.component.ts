import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantListService} from '../services/restaurant-list.service';
import {Subscription} from 'rxjs/Subscription';
import {LoggingService} from '../utils/logging.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy {


  private subscription: Subscription;

  constructor(private movieService: RestaurantListService,
              private log: LoggingService) { }



  ngOnInit() {
    this.subscription = this.movieService.restaurantPublicData.subscribe(
      response => this.log.setConsoleLog(JSON.stringify(response))
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
