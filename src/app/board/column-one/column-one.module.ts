import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdDialogModule, MdNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { DialogFirstColumnComponent } from "./dialog-first-column/dialog-first-column.component";
import { ListOneComponent } from "./list-one/list-one.component";
import { ColumnOneRoutingModule } from "./column-one-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ColumnOneRoutingModule
  ],
  exports: [
    ListOneComponent
  ],
  declarations: [
    DialogFirstColumnComponent,
    ListOneComponent
  ],
  entryComponents: [
    DialogFirstColumnComponent
  ]
})
export class ColumnOneModule { }
