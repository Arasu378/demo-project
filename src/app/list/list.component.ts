import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantListService} from '../services/restaurant-list.service';
import {LoggingService} from '../utils/logging.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {StorageService} from '../utils/storage.service';
import {NearbyRestaurantsModel} from './model/nearby-restaurants.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public restaurantList: NearbyRestaurantsModel[];

  constructor(private movieService: RestaurantListService,
              private logger: LoggingService,
              private router: Router,
              private storage: StorageService) { }

  ngOnInit() {
    this.storage.setToken('asdf');
   this.subscription =  this.movieService.getRestaurantList(13.0012, 80.2565)
      .subscribe(response => {
        this.restaurantList = response.nearby_restaurants;
        this.logger.setConsoleLog('component res: ' + JSON.stringify(response));
        }, error2 => this.logger.setConsoleError(error2));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.logger.setConsoleLog('unsubscribed');
  }
  goToFirst(): void {
    this.router.navigate(['/first']);
  }
  goToParent(): void {
    this.router.navigate(['/parent']);
  }

}
