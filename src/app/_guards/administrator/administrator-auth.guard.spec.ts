import { TestBed } from '@angular/core/testing';

import { AdministratorAuthGuard } from './administrator-auth.guard';

describe('AdministratorAuthGuard', () => {
  let guard: AdministratorAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdministratorAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
