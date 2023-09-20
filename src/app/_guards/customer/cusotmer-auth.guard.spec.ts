import { TestBed } from '@angular/core/testing';

import { CusotmerAuthGuard } from './cusotmer-auth.guard';

describe('CusotmerAuthGuard', () => {
  let guard: CusotmerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CusotmerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
