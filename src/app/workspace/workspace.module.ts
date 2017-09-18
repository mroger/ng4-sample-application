import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { HeaderComponent } from "../header/header.component";
import { BoardComponent } from "../board/board.component";
import { BoardModule } from "../board/board.module";
import { WorkspaceComponent } from "./workspace.component";
import { HeaderModule } from "../header/header.module";

@NgModule({
  imports: [
    CommonModule,
    BoardModule,
    HeaderModule
  ],
  declarations: [
    WorkspaceComponent
  ],
  exports: [
    WorkspaceComponent
  ]
})
export class WorkspaceModule { }
