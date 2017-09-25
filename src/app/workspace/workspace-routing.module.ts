import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent,
    loadChildren: 'app/workspace/board/board.module#BoardModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
