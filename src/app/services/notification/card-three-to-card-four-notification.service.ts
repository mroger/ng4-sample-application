import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Subject";
import { ToFourthColumn } from "../../model/notification/to-fourth-column";

@Injectable()
export class CardThreeToCardFourNotificationService {

  constructor() { }

  private cardSelectedNotifiedSource = new Subject<ToFourthColumn>();
  
  cardSelectedNotified$ = this.cardSelectedNotifiedSource.asObservable();

  notifyCardSelection(toFourthColumn: ToFourthColumn) {
    console.log('Notifying card selected: ', toFourthColumn);
    this.cardSelectedNotifiedSource.next(toFourthColumn);
  }

}
