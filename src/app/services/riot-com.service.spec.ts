import { TestBed } from '@angular/core/testing';

import { RiotComService } from './riot-com.service';

describe('RiotComService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiotComService = TestBed.get(RiotComService);
    expect(service).toBeTruthy();
  });
});
