import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { BoardModule } from "./board/board.module";
import { WorkspaceComponent } from "./workspace.component";
import { HeaderModule } from "./header/header.module";

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    WorkspaceRoutingModule,
    BoardModule
  ],
  exports: [
    WorkspaceComponent
  ],
  declarations: [
    WorkspaceComponent
  ]
})
export class WorkspaceModule { }
