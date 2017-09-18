import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found.component";
import { WorkspaceComponent } from "./workspace/workspace.component";

const routes: Routes = [
  {
    path: 'workspace', component: WorkspaceComponent
  },
  {
    path: '', redirectTo: '/workspace', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }