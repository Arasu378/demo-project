import {LocationModel} from './location.model';
import {PopularityModel} from './popularity.model';
import {NearbyRestaurantsModel} from './nearby-restaurants.model';
export  class ListResponse {
  location: LocationModel;
  popularity: PopularityModel;
  link: string;
  nearby_restaurants: NearbyRestaurantsModel[];
}
