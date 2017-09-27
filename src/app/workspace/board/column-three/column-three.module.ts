import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ListThreeComponent } from './list-three/list-three.component';
import { DialogThirdColumnComponent } from './dialog-third-column/dialog-third-column.component';
import { ListThreeService } from './shared/list-three.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ListThreeComponent
  ],
  declarations: [
    ListThreeComponent,
    DialogThirdColumnComponent
  ],
  providers: [
    ListThreeService
  ],
  entryComponents: [
    DialogThirdColumnComponent
  ]
})
export class ColumnThreeModule { }
