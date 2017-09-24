import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, Params, UrlSegment, UrlTree, UrlSegmentGroup } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DialogThirdColumnComponent } from "../dialog-third-column/dialog-third-column.component";
import { Three } from "../../../../model/three";
import { ListThreeService } from "../../../../services/list-three.service";

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
    private listThreeService: ListThreeService) {
      this.route.params
        .switchMap((params: Params) => {

          //Tudo bem usar aqui?
          this.selectedCardOneId =  +this.router.parseUrl(this.router.url)
            .root.children.primary.children['column-two'].segments[0].path;

          this.cardItems = [];
          this.selectedCardTwoId = +params['columnTwoSelectedCardId'];
          this.showList = !isNaN(this.selectedCardTwoId);
          return this.showList ? this.listThreeService.getCardItems(this.selectedCardTwoId) : [];
        })
        .subscribe((cardItem: Three) => {
          if (cardItem) this.cardItems.push(cardItem);
        });
    }

  ngOnInit() { }

  onSelectCard(cardItem: Three): void {
    // console.log('Router parse URL new --->');
    // const tree: UrlTree = this.router.parseUrl(this.router.url);
    // console.log(tree);
    // const g: UrlSegmentGroup = tree.root.children.primary;
    // console.log(g);
    // const s: { [key: string]: UrlSegmentGroup; } = g.children;
    // console.log(s['column-two'].segments[0]);
    // console.log(s['column-two'].segments[0].path);

    console.log('Card clicado! ', cardItem);
    this.router.navigate(['/board', {outlets: {
      'column-two': [this.selectedCardOneId],
      'column-three': [this.selectedCardTwoId],
      'column-four': [cardItem.id]
    }}]);
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
