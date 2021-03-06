import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { DialogFirstColumnComponent } from '../dialog-first-column/dialog-first-column.component';
import { One } from './../shared/one.model';
import { ListOneService } from '../shared/list-one.service';

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.css']
})
export class ListOneComponent implements OnInit {

  cardItems: Array<One>;

  constructor(
    private dialog: MdDialog,
    private router: Router,
    private listOneService: ListOneService) {
      this.cardItems = [];
    }

  ngOnInit() {
    this.listOneService.getCardItems()
      .then(cardItems => {
        this.cardItems = cardItems;
      });
  }

  onSelectCard(cardItem: One): void {
    this.router.navigate(['/board', {outlets: {
      'column-two': [cardItem.id],
      'column-three': ['none'],
      'column-four': ['none'],
    }}]);
  }

  addToFirstColumn(): void {
    const dialogRef = this.dialog.open(DialogFirstColumnComponent, {
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
