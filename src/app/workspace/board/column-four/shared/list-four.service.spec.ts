import { TestBed, inject } from '@angular/core/testing';

import { ListFourService } from './list-four.service';

describe('ListFourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListFourService]
    });
  });

  it('should be created', inject([ListFourService], (service: ListFourService) => {
    expect(service).toBeTruthy();
  }));
});
