import { TestBed, inject } from '@angular/core/testing';

import { ListThreeService } from './list-three.service';

describe('ListThreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListThreeService]
    });
  });

  it('should be created', inject([ListThreeService], (service: ListThreeService) => {
    expect(service).toBeTruthy();
  }));
});
