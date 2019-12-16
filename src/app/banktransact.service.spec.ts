import { TestBed } from '@angular/core/testing';

import { BanktransactService } from './banktransact.service';

describe('BanktransactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanktransactService = TestBed.get(BanktransactService);
    expect(service).toBeTruthy();
  });
});
