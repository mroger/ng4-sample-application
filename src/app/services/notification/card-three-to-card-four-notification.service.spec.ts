import { TestBed, inject } from '@angular/core/testing';

import { CardThreeToCardFourNotificationService } from './card-three-to-card-four-notification.service';

describe('CardThreeToCardFourNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardThreeToCardFourNotificationService]
    });
  });

  it('should be created', inject([CardThreeToCardFourNotificationService], (service: CardThreeToCardFourNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
