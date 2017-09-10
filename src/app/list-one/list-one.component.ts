import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { DialogFirstColumnComponent } from "../dialog-first-column/dialog-first-column.component";
import { ListOneService } from "../services/list-one.service";
import { One } from "../model/one";
import { CardOneToCardTwoNotificationService } from "../services/notification/card-one-to-card-two-notification.service";
import { ToSecondColumn } from "../model/notification/to-second-column";

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.css']
})
export class ListOneComponent implements OnInit {

  cardItems: Array<One>;

  constructor(
    public dialog: MdDialog,
    private listOneService: ListOneService,
    private notificationService: CardOneToCardTwoNotificationService) { }

  ngOnInit() {
    this.cardItems = this.listOneService.getCardItems();
  }

  onSelectCard(cardItem: One): void {
    console.log('Card clicado! ', cardItem);
    this.notificationService.notifyCardSelection(
      new ToSecondColumn(cardItem.id));
  }

  addToFirstColumn(): void {
    let dialogRef = this.dialog.open(DialogFirstColumnComponent, {
      width: '500px',
      data: { name: null, year: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCardItem = this.listOneService.addCardItem(
          new One(null, result.name, result.year));
      }
    });
  }

}
