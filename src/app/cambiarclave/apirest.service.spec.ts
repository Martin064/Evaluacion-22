import { TestBed } from '@angular/core/testing';

import { ApiRestService } from './apirest.service';

describe('ApirestService', () => {
  let service: ApiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
