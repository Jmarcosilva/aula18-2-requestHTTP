import { TestBed } from '@angular/core/testing';

import { CombustiveisService } from './combustiveis.service';

describe('CombustiveisService', () => {
  let service: CombustiveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombustiveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
