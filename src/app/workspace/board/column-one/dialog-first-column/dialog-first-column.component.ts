import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { FirstColumn } from '../../../../model/dialog/first-column';


@Component({
  selector: 'app-dialog-first-column',
  templateUrl: './dialog-first-column.component.html',
  styleUrls: ['./dialog-first-column.component.css']
})
export class DialogFirstColumnComponent implements OnInit {

  inputName: string;
  inputYear: number;
  years: Array<number> = [ 2015, 2016, 2017, 2018, 2019, 2020 ];

  constructor(
    public dialogRef: MdDialogRef<DialogFirstColumnComponent>,
    @Inject(MD_DIALOG_DATA) public data: FirstColumn) {
      this.inputName = data.name;
      this.inputYear = data.year;
    }

  ngOnInit() {
  }

  criarItem(): void {
    this.dialogRef.close(new FirstColumn(this.inputName, this.inputYear));
  }

}
