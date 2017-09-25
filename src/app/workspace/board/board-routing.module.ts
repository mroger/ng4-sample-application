import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOneComponent } from './column-one/list-one/list-one.component';
import { ListTwoComponent } from './column-two/list-two/list-two.component';
import { BoardComponent } from './board.component';
import { ListThreeComponent } from './column-three/list-three/list-three.component';
import { ListFourComponent } from './column-four/list-four/list-four.component';

const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent,
    children: [
      {
        path: '',
        component: ListOneComponent,
        outlet: 'column-one'
      },
      {
        path: ':columnOneSelectedCardId',
        component: ListTwoComponent,
        outlet: 'column-two'
      },
      {
        path: ':columnTwoSelectedCardId',
        component: ListThreeComponent,
        outlet: 'column-three'
      },
      {
        path: ':columnThreeSelectedCardId',
        component: ListFourComponent,
        outlet: 'column-four'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
