import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspaceComponent } from "./workspace.component";
import { BoardComponent } from "./board/board.component";
import { ListOneComponent } from "./board/column-one/list-one/list-one.component";

const routes: Routes = [
  {
    path: 'board',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        component: BoardComponent,
        children: [
          {
            path: '',
            component: ListOneComponent,
            outlet: 'column-one'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
