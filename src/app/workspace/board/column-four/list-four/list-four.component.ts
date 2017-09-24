import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, Params, UrlSegment } from '@angular/router';

import { DialogFourthColumnComponent } from "../dialog-fourth-column/dialog-fourth-column.component";
import { Four } from "../../../../model/four";
import { ListFourService } from "../../../../services/list-four.service";

@Component({
  selector: 'app-list-four',
  templateUrl: './list-four.component.html',
  styleUrls: ['./list-four.component.css']
})
export class ListFourComponent implements OnInit {

  selectedCardOneId: number;
  selectedCardTwoId: number;
  selectedCardThreeId: number;
  cardItems: Array<Four> = [];
  showList: boolean;

  constructor(
    public dialog: MdDialog,
    private route: ActivatedRoute,
    private router: Router,
    private listFourService: ListFourService) {
      this.route.params
        .switchMap((params: Params) => {

          //Tudo bem usar aqui?
          this.selectedCardOneId =  +this.router.parseUrl(this.router.url)
            .root.children.primary.children['column-two'].segments[0].path;
          this.selectedCardTwoId =  +this.router.parseUrl(this.router.url)
            .root.children.primary.children['column-three'].segments[0].path;

          this.cardItems = [];
          this.selectedCardThreeId = +params['columnThreeSelectedCardId'];
          this.showList = !isNaN(this.selectedCardThreeId);
          return this.showList ? this.listFourService.getCardItems(this.selectedCardThreeId) : [];
        })
        .subscribe((cardItem: Four) => {
          if (cardItem) this.cardItems.push(cardItem);
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
