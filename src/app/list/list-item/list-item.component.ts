import {Component, Input, OnInit} from '@angular/core';
import {NearbyRestaurantsModel} from '../model/nearby-restaurants.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() restaurant: NearbyRestaurantsModel;
  constructor() { }

  ngOnInit() {
  }

}
