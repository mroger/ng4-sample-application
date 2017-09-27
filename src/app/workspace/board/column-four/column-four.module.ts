import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ListFourComponent } from './list-four/list-four.component';
import { DialogFourthColumnComponent } from './dialog-fourth-column/dialog-fourth-column.component';
import { ListFourService } from './shared/list-four.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ListFourComponent
  ],
  declarations: [
    ListFourComponent,
    DialogFourthColumnComponent
  ],
  providers: [
    ListFourService
  ],
  entryComponents: [
    DialogFourthColumnComponent
  ]
})
export class ColumnFourModule { }
