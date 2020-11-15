import { TestBed } from '@angular/core/testing';

import { NotLoggedGuardGuard } from './not-logged-guard.guard';

describe('NotLoggedGuardGuard', () => {
  let guard: NotLoggedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotLoggedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
