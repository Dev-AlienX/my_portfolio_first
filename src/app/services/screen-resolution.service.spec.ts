import { TestBed } from '@angular/core/testing';

import { ScreenResolutionService } from './screen-resolution.service';

describe('ScreenResolutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenResolutionService = TestBed.get(ScreenResolutionService);
    expect(service).toBeTruthy();
  });
});
