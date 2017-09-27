import { Injectable } from '@angular/core';
import { maxBy } from 'lodash';

import { One } from './one.model';

@Injectable()
export class ListOneService {

  cardItems: Array<One> = [
    {
      id: 1,
      name: 'Simple Card 1',
      year: 2015
    }
  ];

  constructor() { }

  getCardItems(): Array<One> {
    return this.cardItems;
  }

  addCardItem(cardItem: One): One {
    cardItem.id = maxBy(this.cardItems, cardItemPred => cardItemPred.id).id + 1;
    this.cardItems.push(cardItem);
    return cardItem;
  }

  getCardItem(cardItemId: number): One {
    return this.cardItems.find(cardItem => {
      return cardItem.id === cardItemId;
    });
  }

}
