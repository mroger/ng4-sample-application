import { Injectable } from '@angular/core';
import { maxBy } from "lodash";

import { Three } from "../model/three";

@Injectable()
export class ListThreeService {

  cardItems: Array<Three> = [{
    id: 1,
    name: 'Card 1',
    managerId: 1,
    targetDate: new Date(2017, 8, 9),
    selectedCardTwoId: 1
  }];
  
  constructor() { }

  getCardItems(selectedCardTwoId: number): Array<Three> {
    if (this.cardItems.length === 0) {
      return [];
    }
    return this.cardItems.filter(cardItem => {
      return cardItem.selectedCardTwoId === selectedCardTwoId;
    });
  }

  addCardItem(cardItem: Three): Three {
    console.log('Adding third card: ', cardItem);
    cardItem.id = this.cardItems.length > 0
      ? maxBy(this.cardItems, cardItem => cardItem.id).id + 1
      : 1;
    this.cardItems.push(cardItem);
    return cardItem;
  }
  
  getCardItem(cardItemId: number): Three {
    return this.cardItems.find(cardItem => {
      return cardItem.id === cardItemId;
    });
  }

}
