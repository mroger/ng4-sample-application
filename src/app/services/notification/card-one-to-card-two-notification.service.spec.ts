import { TestBed, inject } from '@angular/core/testing';

import { CardOneToCardTwoNotificationService } from './card-one-to-card-two-notification.service';

describe('CardOneToCardTwoNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardOneToCardTwoNotificationService]
    });
  });

  it('should be created', inject([CardOneToCardTwoNotificationService], (service: CardOneToCardTwoNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
