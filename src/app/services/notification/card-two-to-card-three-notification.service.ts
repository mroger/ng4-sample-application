import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Subject";
import { ToThirdColumn } from "../../model/notification/to-third-column";

@Injectable()
export class CardTwoToCardThreeNotificationService {

  constructor() { }

  private cardSelectedNotifiedSource = new Subject<ToThirdColumn>();
  
  cardSelectedNotified$ = this.cardSelectedNotifiedSource.asObservable();

  notifyCardSelection(toThirdColumn: ToThirdColumn) {
    console.log('Notifying card selected: ', toThirdColumn);
    this.cardSelectedNotifiedSource.next(toThirdColumn);
  }

}
