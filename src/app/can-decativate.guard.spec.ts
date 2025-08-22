import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canDecativateGuard } from './can-decativate.guard';

describe('canDecativateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canDecativateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
