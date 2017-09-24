import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, UrlSegment, UrlTree, UrlSegmentGroup } from '@angular/router';
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
  cardItems: Array<Three>;

  constructor(
    public dialog: MdDialog,
    private route: ActivatedRoute,
    private router: Router,
    private listThreeService: ListThreeService) {
      this.cardItems = [];
      route.params.subscribe( params => console.log(params) );
      route.data.subscribe( params => console.log(params) );
      
      // console.log('route.url --->');
      // route.url.forEach((u: UrlSegment[]) => {
      //   console.log(u);
      // });
      
      // console.log('----->', this.route.snapshot.params);
      // console.log('----->', this.route.snapshot.data);
      // console.log('----->', this.route.snapshot.fragment);
      // console.log('----->', this.route.snapshot.url);
      // console.log('----->', this.route.snapshot.root.url);
      // console.log('----->', this.route.snapshot.pathFromRoot);

      // console.log('Router parse URL --->');
      // let parsedUrl = this.router.parseUrl(this.router.url);
      // console.log(parsedUrl);
      // console.log('this.router.url --->');
      // console.log(this.router.url);

      route.paramMap
      .switchMap((params: ParamMap) => {
        // console.log(params);
        // console.log('Selected card notified: ', params.get('columnOneSelectedCardId'));
        // console.log('Selected card notified: ', params.get('columnTwoSelectedCardId'));
        this.selectedCardOneId = +params.get('columnOneSelectedCardId');
        this.selectedCardTwoId = +params.get('columnTwoSelectedCardId');
        return params.get('columnTwoSelectedCardId');
      })
      .subscribe((cardId: string) => {
        this.cardItems = this.listThreeService.getCardItems(+cardId);
      });
    }

  ngOnInit() {
    // console.log('Router parse URL new --->');
    // const tree: UrlTree = this.router.parseUrl(this.router.url);
    // console.log(tree);
    // const g: UrlSegmentGroup = tree.root.children.primary;
    // console.log(g);
    // const s: { [key: string]: UrlSegmentGroup; } = g.children;
    // console.log(s['column-two'].segments[0].path);
    // console.log(s['column-three'].segments[0].path);
  }

  onSelectCard(cardItem: Three): void {
    console.log('Card clicado! ', cardItem);
    this.router.navigate(['/board', {outlets: {
      'column-two': [1],
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
