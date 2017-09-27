import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ListTwoComponent } from './list-two/list-two.component';
import { DialogSecondColumnComponent } from './dialog-second-column/dialog-second-column.component';
import { ListTwoService } from './shared/list-two.service';

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
  providers: [
    ListTwoService
  ],
  entryComponents: [
    DialogSecondColumnComponent
  ]
})
export class ColumnTwoModule { }
