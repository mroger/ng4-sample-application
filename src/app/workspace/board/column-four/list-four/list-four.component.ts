import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';

import { DialogFourthColumnComponent } from "../dialog-fourth-column/dialog-fourth-column.component";
import { Four } from "../../../../model/four";
import { ListFourService } from "../../../../services/list-four.service";
import { CardThreeToCardFourNotificationService } from "../../../../services/notification/card-three-to-card-four-notification.service";

@Component({
  selector: 'app-list-four',
  templateUrl: './list-four.component.html',
  styleUrls: ['./list-four.component.css']
})
export class ListFourComponent implements OnInit {

  selectedCardOneId: number;
  selectedCardTwoId: number;
  selectedCardThreeId: number;
  cardItems: Array<Four>;

  constructor(
    public dialog: MdDialog,
    private route: ActivatedRoute,
    private router: Router,
    private listFourService: ListFourService,
    private notificationService: CardThreeToCardFourNotificationService) {

      console.log('this.router.url --->');
      console.log(this.router.url);

      this.cardItems = [];
      notificationService.cardSelectedNotified$.subscribe(selectedCard => {
        console.log('Selected card notified: ', selectedCard);
        this.selectedCardOneId = selectedCard.selectedCardOneId;
        this.selectedCardTwoId = selectedCard.selectedCardTwoId;
        this.selectedCardThreeId = selectedCard.selectedCardThreeId;
        this.cardItems = this.listFourService.getCardItems(selectedCard.selectedCardTwoId);
      });
  }

  ngOnInit() {
  }

  onSelectCard(cardItem: Four): void {
    console.log('Card clicado! ', cardItem);
  }
  
  addToFourthColumn(): void {
    let dialogRef = this.dialog.open(DialogFourthColumnComponent, {
      width: '500px',
      data: {
        selectedCardOneId: this.selectedCardOneId,
        selectedCardTwoId: this.selectedCardTwoId,
        selectedCardThreeId: this.selectedCardThreeId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dados salvos na quarta coluna: ', result);
        const newCardItem = this.listFourService.addCardItem(
          new Four(null, result.description, result.managerId, result.startDate, result.endDate,
            result.weight, result.evolution, result.status, result.selectedCardThreeId));
        this.cardItems.push(newCardItem);
      }
    });
  }

}
