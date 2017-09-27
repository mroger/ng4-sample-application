import { TestBed, inject } from '@angular/core/testing';

import { ListTwoService } from './list-two.service';

describe('ListTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListTwoService]
    });
  });

  it('should be created', inject([ListTwoService], (service: ListTwoService) => {
    expect(service).toBeTruthy();
  }));
});
