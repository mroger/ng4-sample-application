import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, Params, UrlSegment, UrlTree, UrlSegmentGroup } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DialogThirdColumnComponent } from '../dialog-third-column/dialog-third-column.component';
import { Three } from './../shared/three.model';
import { ListThreeService } from '../shared/list-three.service';

@Component({
  selector: 'app-list-three',
  templateUrl: './list-three.component.html',
  styleUrls: ['./list-three.component.css']
})
export class ListThreeComponent implements OnInit {

  selectedCardOneId: number;
  selectedCardTwoId: number;
  cardItems: Array<Three> = [];
  showList: boolean;

  constructor(
    public dialog: MdDialog,
    private route: ActivatedRoute,
    private router: Router,
    private listThreeService: ListThreeService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.cardItems = [];
        this.selectedCardTwoId = +params['columnTwoSelectedCardId'];
        this.showList = !isNaN(this.selectedCardTwoId);
        return this.showList ? this.listThreeService.getCardItems(this.selectedCardTwoId) : [];
      })
      .subscribe((cardItem: Three) => {
        this.cardItems.push(cardItem);

        this.selectedCardOneId =  +this.router.parseUrl(this.router.url)
          .root.children.primary.children['column-two'].segments[0].path;
      });
  }

  onSelectCard(cardItem: Three): void {
    this.router.navigate(['/board', {outlets: {
      'column-two': [this.selectedCardOneId],
      'column-three': [this.selectedCardTwoId],
      'column-four': [cardItem.id]
    }}]);
  }

  addToThirdColumn(): void {
    const dialogRef = this.dialog.open(DialogThirdColumnComponent, {
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
