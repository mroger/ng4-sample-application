import { TestBed, inject } from '@angular/core/testing';

import { CardTwoToCardThreeNotificationService } from './card-two-to-card-three-notification.service';

describe('CardTwoToCardThreeNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardTwoToCardThreeNotificationService]
    });
  });

  it('should be created', inject([CardTwoToCardThreeNotificationService], (service: CardTwoToCardThreeNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
