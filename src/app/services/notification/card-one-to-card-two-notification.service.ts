import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Subject";
import { ToSecondColumn } from "../../model/notification/to-second-column";

@Injectable()
export class CardOneToCardTwoNotificationService {

  constructor() { }

  private cardSelectedNotifiedSource = new Subject<ToSecondColumn>();

  cardSelectedNotified$ = this.cardSelectedNotifiedSource.asObservable();

  notifyCardSelection(toSecondColumn:ToSecondColumn) {
    console.log('Notifying card selected: ', toSecondColumn);
    this.cardSelectedNotifiedSource.next(toSecondColumn);
  }

}
