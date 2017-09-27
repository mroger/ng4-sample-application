import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { remove } from 'lodash';
import { One } from '../../column-one/shared/one.model';
import { SecondColumn } from '../shared/second-column';
import { ListOneService } from '../../column-one/shared/list-one.service';

@Component({
  selector: 'app-dialog-second-column',
  templateUrl: './dialog-second-column.component.html',
  styleUrls: ['./dialog-second-column.component.css']
})
export class DialogSecondColumnComponent implements OnInit {

  selectedCardOne: One;
  inputName: string;
  inputGoal: string;
  goals: Array<string> = [];

  constructor(
    public dialogRef: MdDialogRef<DialogSecondColumnComponent>,
    private listOneService: ListOneService,
    @Inject(MD_DIALOG_DATA) public data: SecondColumn) {
      console.log('Received data on dialog: ', data);
      this.selectedCardOne = listOneService.getCardItem(data.selectedCardOneId);
      console.log('Found selectedCardOne: ', this.selectedCardOne);
    }

  ngOnInit() {
  }

  criarItem(): void {
    this.dialogRef.close(new SecondColumn(this.selectedCardOne.id, this.inputName, this.goals));
  }

  addGoal(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      console.log(event);
      this.goals.push(this.inputGoal);
      this.inputGoal = '';
    }
  }

  removeGoal(removingGoal: string): void {
    remove(this.goals, goal => goal === removingGoal);
  }

}
