import { TestBed } from '@angular/core/testing';

import { WatchListSService } from './watch-list-s.service';

describe('WatchListSService', () => {
  let service: WatchListSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchListSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
