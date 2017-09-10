import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { DialogSecondColumnComponent } from "../dialog-second-column/dialog-second-column.component";
import { One } from "../model/one";
import { Two } from "../model/two";
import { ListTwoService } from "../services/list-two.service";
import { CardOneToCardTwoNotificationService } from "../services/notification/card-one-to-card-two-notification.service";
import { CardTwoToCardThreeNotificationService } from "../services/notification/card-two-to-card-three-notification.service";
import { ToThirdColumn } from "../model/notification/to-third-column";

@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.css']
})
export class ListTwoComponent implements OnInit {

  selectedCardOneId: number;
  cardItems: Array<Two>;

  constructor(
    public dialog: MdDialog,
    private listTwoService: ListTwoService,
    private notificationService: CardOneToCardTwoNotificationService,
    private notificationNextService: CardTwoToCardThreeNotificationService) {
      this.cardItems = [];
      notificationService.cardSelectedNotified$.subscribe(selectedCard => {
        console.log('Selected card notified: ', selectedCard);
        this.selectedCardOneId = selectedCard.selectedCardOneId;
        this.cardItems = this.listTwoService.getCardItems(selectedCard.selectedCardOneId);
      });
    }

  ngOnInit() { }

  onSelectCard(cardItem: Two): void {
    console.log('Card clicado! ', cardItem);
    this.notificationNextService.notifyCardSelection(
      new ToThirdColumn(this.selectedCardOneId, cardItem.id));
  }

  addToSecondColumn(): void {
    let dialogRef = this.dialog.open(DialogSecondColumnComponent, {
      width: '500px',
      data: { selectedCardOneId: this.selectedCardOneId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCardItem = this.listTwoService.addCardItem(
          new Two(null, result.name, result.goals, result.selectedCardOneId));
        this.cardItems.push(newCardItem);
      }
    });
  }

}
