import {RModel} from './r.model';
import {LocationModel} from './location.model';
import {UserRatingModel} from './user-rating.model';

export class RestaurantModel {
  R: RModel;
  apikey: string;
  id: string;
  name: string;
  url: string;
  location: LocationModel;
  switch_to_order_menu: number;
  cuisines: string;
  average_cost_for_two: number;
  price_range: number;
  currency: string;
  thumb: string;
  user_rating: UserRatingModel;
  photos_url: string;
  menu_url: string;
  featured_image: string;
  has_online_delivery: number;
  is_delivering_now: number;
  deeplink: string;
  order_url: string;
  order_deeplink: string;
  has_table_booking: number;
  book_url: string;
  events_url: string;
}
