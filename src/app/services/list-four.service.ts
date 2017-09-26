import { Injectable } from '@angular/core';
import { maxBy } from 'lodash';

import { Four } from '../workspace/board/column-four/shared/four.model';

@Injectable()
export class ListFourService {

  cardItems: Array<Four> = [{
    id: 1,
    description: 'Card 1',
    managerId: 1,
    startDate: new Date(2017, 8, 1),
    endDate: new Date(2017, 8, 30),
    weight: 10.5,
    evolution: 15.7,
    status: 1,
    selectedCardThreeId: 1
  }];

  constructor() { }

  getCardItems(selectedCardThreeId: number): Array<Four> {
    if (this.cardItems.length === 0) {
      return [];
    }
    return this.cardItems.filter(cardItem => {
      return cardItem.selectedCardThreeId === selectedCardThreeId;
    });
  }

  addCardItem(cardItem: Four): Four {
    console.log('Adding fourth card: ', cardItem);
    cardItem.id = this.cardItems.length > 0
      ? maxBy(this.cardItems, cardItemPred => cardItemPred.id).id + 1
      : 1;
    this.cardItems.push(cardItem);
    return cardItem;
  }

  getCardItem(cardItemId: number): Four {
    return this.cardItems.find(cardItem => {
      return cardItem.id === cardItemId;
    });
  }

}
