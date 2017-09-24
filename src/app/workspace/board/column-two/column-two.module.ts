import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

import { ListTwoComponent } from "./list-two/list-two.component";
import { DialogSecondColumnComponent } from "./dialog-second-column/dialog-second-column.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ListTwoComponent
  ],
  declarations: [
    ListTwoComponent,
    DialogSecondColumnComponent
  ],
  entryComponents: [
    DialogSecondColumnComponent
  ]
})
export class ColumnTwoModule { }
