import { TestBed, inject } from '@angular/core/testing';

import { ListOneService } from './list-one.service';

describe('ListOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOneService]
    });
  });

  it('should be created', inject([ListOneService], (service: ListOneService) => {
    expect(service).toBeTruthy();
  }));
});
