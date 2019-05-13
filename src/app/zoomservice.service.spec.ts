import { TestBed } from '@angular/core/testing';

import { ZoomserviceService } from './zoomservice.service';

describe('ZoomserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZoomserviceService = TestBed.get(ZoomserviceService);
    expect(service).toBeTruthy();
  });
});
