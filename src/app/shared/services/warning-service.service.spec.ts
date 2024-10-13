import { TestBed } from '@angular/core/testing';

import { WarningServiceService } from './warning-service.service';

describe('WarningServiceService', () => {
  let service: WarningServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarningServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
