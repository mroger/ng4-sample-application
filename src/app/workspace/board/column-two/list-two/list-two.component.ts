import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, Params, UrlSegment, UrlTree, UrlSegmentGroup } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DialogSecondColumnComponent } from '../dialog-second-column/dialog-second-column.component';
import { Two } from './../shared/two.model';
import { ListTwoService } from '../shared/list-two.service';

@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.css']
})
export class ListTwoComponent implements OnInit {

  selectedCardOneId: number;
  cardItems: Array<Two> = [];
  showList: boolean;

  constructor(
    private dialog: MdDialog,
    private route: ActivatedRoute,
    private router: Router,
    private listTwoService: ListTwoService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.cardItems = [];
        this.selectedCardOneId = +params['columnOneSelectedCardId'];
        this.showList = !isNaN(this.selectedCardOneId);
        return this.showList ? this.listTwoService.getCardItems(this.selectedCardOneId) : [];
      })
      .subscribe((cardItem: Two) => {
        this.cardItems.push(cardItem);
      });
  }

  onSelectCard(cardItem: Two): void {
    this.router.navigate(['/board', {outlets: {
      'column-two': [this.selectedCardOneId],
      'column-three': [cardItem.id],
      'column-four': ['none']
    }}]);
  }

  addToSecondColumn(): void {
    const dialogRef = this.dialog.open(DialogSecondColumnComponent, {
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
