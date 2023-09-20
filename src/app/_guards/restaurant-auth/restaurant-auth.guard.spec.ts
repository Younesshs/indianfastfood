import { TestBed } from '@angular/core/testing';

import { RestaurantAuthGuard } from './restaurant-auth.guard';

describe('RestaurantAuthGuard', () => {
  let guard: RestaurantAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestaurantAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
