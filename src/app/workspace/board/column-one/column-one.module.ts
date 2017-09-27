import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdDialogModule, MdNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { DialogFirstColumnComponent } from './dialog-first-column/dialog-first-column.component';
import { ListOneComponent } from './list-one/list-one.component';
import { ListOneService } from './shared/list-one.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ListOneComponent
  ],
  declarations: [
    DialogFirstColumnComponent,
    ListOneComponent
  ],
  providers: [
    ListOneService
  ],
  entryComponents: [
    DialogFirstColumnComponent
  ]
})
export class ColumnOneModule { }
