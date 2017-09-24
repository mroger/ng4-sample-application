import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, UrlSegment, UrlTree, UrlSegmentGroup } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DialogSecondColumnComponent } from "../dialog-second-column/dialog-second-column.component";
import { Two } from "../../../../model/two";
import { ListTwoService } from "../../../../services/list-two.service";

@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.css']
})
export class ListTwoComponent implements OnInit {

  selectedCardOneId: number;
  cardItems: Array<Two>;

  constructor(
    private dialog: MdDialog,
    private route: ActivatedRoute,
    private router: Router,
    private listTwoService: ListTwoService) {
      this.cardItems = [];
      this.route.queryParams.subscribe( params => console.log(params) );

      console.log('route.url column two --->');
      route.url.forEach((u: UrlSegment[]) => {
        console.log(u);
      });
      
      console.log('Router parse URL --->');
      let parsedUrl = this.router.parseUrl(this.router.url);
      console.log(parsedUrl);
      console.log('this.router.url --->');
      console.log(this.router.url);

      this.route.paramMap
        .switchMap((params: ParamMap) => {
          console.log(params);
          console.log('List-two: Selected card notified: ', params.get('columnOneSelectedCardId'));
          this.selectedCardOneId = +params.get('columnOneSelectedCardId')
          return params.get('columnOneSelectedCardId');
        })
        .subscribe((cardId: string) => {
          this.cardItems = this.listTwoService.getCardItems(+cardId);
        });
    }

  ngOnInit() { }

  onSelectCard(cardItem: Two): void {
    console.log('Router parse URL new --->');
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    console.log(tree);
    const g: UrlSegmentGroup = tree.root.children.primary;
    console.log(g);
    const s: { [key: string]: UrlSegmentGroup; } = g.children;
    console.log(s['column-two'].segments[0]);
    console.log(s['column-two'].segments[0].path);

    console.log('Card clicado! ', cardItem);
    this.router.navigate(['/board', {outlets: {
      'column-two': [this.selectedCardOneId],
      'column-three': [cardItem.id]
    }}]);
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
