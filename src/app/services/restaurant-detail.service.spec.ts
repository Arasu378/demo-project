import { TestBed, inject } from '@angular/core/testing';

import { RestaurantDetailService } from './restaurant-detail.service';

describe('RestaurantDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantDetailService]
    });
  });

  it('should be created', inject([RestaurantDetailService], (service: RestaurantDetailService) => {
    expect(service).toBeTruthy();
  }));

});
