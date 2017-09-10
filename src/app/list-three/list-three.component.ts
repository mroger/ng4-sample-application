import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Three } from "../model/three";
import { ListThreeService } from "../services/list-three.service";
import { CardTwoToCardThreeNotificationService } from "../services/notification/card-two-to-card-three-notification.service";
import { CardThreeToCardFourNotificationService } from "../services/notification/card-three-to-card-four-notification.service";
import { DialogThirdColumnComponent } from "../dialog-third-column/dialog-third-column.component";
import { ToFourthColumn } from "../model/notification/to-fourth-column";

@Component({
  selector: 'app-list-three',
  templateUrl: './list-three.component.html',
  styleUrls: ['./list-three.component.css']
})
export class ListThreeComponent implements OnInit {

  selectedCardOneId: number;
  selectedCardTwoId: number;
  cardItems: Array<Three>;

  constructor(
    public dialog: MdDialog,
    private listThreeService: ListThreeService,
    private notificationService: CardTwoToCardThreeNotificationService,
    private notificationNextService: CardThreeToCardFourNotificationService) {
      this.cardItems = [];
      notificationService.cardSelectedNotified$.subscribe(selectedCard => {
        console.log('Selected card notified: ', selectedCard);
        this.selectedCardOneId = selectedCard.selectedCardOneId;
        this.selectedCardTwoId = selectedCard.selectedCardTwoId;
        this.cardItems = this.listThreeService.getCardItems(selectedCard.selectedCardTwoId);
      });
    }

  ngOnInit() {
  }

  onSelectCard(cardItem: Three): void {
    console.log('Card clicado! ', cardItem);
    this.notificationNextService.notifyCardSelection(
      new ToFourthColumn(this.selectedCardOneId, this.selectedCardTwoId, cardItem.id));
  }

  addToThirdColumn(): void {
    let dialogRef = this.dialog.open(DialogThirdColumnComponent, {
      width: '500px',
      data: {
        selectedCardOneId: this.selectedCardOneId,
        selectedCardTwoId: this.selectedCardTwoId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCardItem = this.listThreeService.addCardItem(
          new Three(null, result.name, result.managerId, result.targetDate, result.selectedCardTwoId));
        this.cardItems.push(newCardItem);
      }
    });
  }

}
