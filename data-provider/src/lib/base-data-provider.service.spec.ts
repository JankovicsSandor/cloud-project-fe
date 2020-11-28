import { TestBed } from '@angular/core/testing';

import { BaseDataProviderService } from './base-data-provider.service';

describe('BaseDataProviderService', () => {
  let service: BaseDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
