import { TestBed } from '@angular/core/testing';

import { TestymonialsService } from './testymonials.service';

describe('TestymonialsService', () => {
  let service: TestymonialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestymonialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
