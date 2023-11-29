import { TestBed } from '@angular/core/testing';

import { HealthMonitorService } from './health-monitor.service';

describe('HealthMonitorService', () => {
  let service: HealthMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
