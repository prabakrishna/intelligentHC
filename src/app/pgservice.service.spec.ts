import { TestBed, inject } from '@angular/core/testing';

import { PgserviceService } from './pgservice.service';

describe('PgserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PgserviceService]
    });
  });

  it('should be created', inject([PgserviceService], (service: PgserviceService) => {
    expect(service).toBeTruthy();
  }));
});
