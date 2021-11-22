import { TestBed } from '@angular/core/testing';

import { FavitemsService } from './favitems.service';

describe('FavitemsService', () => {
  let service: FavitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
