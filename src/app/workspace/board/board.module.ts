import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { ColumnOneModule } from './column-one/column-one.module';
import { BoardComponent } from './board.component';
import { ColumnTwoModule } from './column-two/column-two.module';
import { ColumnThreeModule } from './column-three/column-three.module';
import { ColumnFourModule } from './column-four/column-four.module';
import { BoardRoutingModule } from './board-routing.module';
import { HeaderModule } from '../header/header.module';
import { ManagersService } from './shared/managers.service';

@NgModule({
  imports: [
    CommonModule,
    ColumnOneModule,
    ColumnTwoModule,
    ColumnThreeModule,
    ColumnFourModule,
    MaterialModule,
    BoardRoutingModule
  ],
  exports: [
    BoardComponent
  ],
  declarations: [
    BoardComponent
  ],
  providers: [
    ManagersService
  ]
})
export class BoardModule { }
