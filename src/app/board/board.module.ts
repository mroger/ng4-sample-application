import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@angular/material";

import { ColumnOneModule } from "./column-one/column-one.module";
import { BoardComponent } from "./board.component";
import { ColumnTwoModule } from "./column-two/column-two.module";
import { ColumnThreeModule } from "./column-three/column-three.module";
import { ColumnFourModule } from "./column-four/column-four.module";

@NgModule({
  imports: [
    CommonModule,
    ColumnOneModule,
    ColumnTwoModule,
    ColumnThreeModule,
    ColumnFourModule,
    MaterialModule
  ],
  exports: [
    BoardComponent
  ],
  declarations: [
    BoardComponent
  ]
})
export class BoardModule { }
