import { TestBed } from '@angular/core/testing';

import { ResumeDataService } from './resume-data.service';

describe('ResumeDataService', () => {
  let service: ResumeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
