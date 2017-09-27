import { Injectable } from '@angular/core';
import { maxBy } from 'lodash';

import { Two } from './two.model';

@Injectable()
export class ListTwoService {

  cardItems: Array<Two> = [{
    id: 1,
    name: 'Card 1',
    goals: [ 'Meta 1', 'Meta 2'],
    selectedCardOneId: 1
  }];

  constructor() { }

  getCardItems(selectedCardOneId: number): Array<Two> {
    if (this.cardItems.length === 0) {
      return [];
    }
    return this.cardItems.filter(cardItem => {
      return cardItem.selectedCardOneId === selectedCardOneId;
    });
  }

  addCardItem(cardItem: Two): Two {
    console.log('Adding second card: ', cardItem);
    cardItem.id = this.cardItems.length > 0
      ? maxBy(this.cardItems, cardItemPred => cardItemPred.id).id + 1
      : 1;
    this.cardItems.push(cardItem);
    return cardItem;
  }

  getCardItem(cardItemId: number): Two {
    return this.cardItems.find(cardItem => {
      return cardItem.id === cardItemId;
    });
  }

}
