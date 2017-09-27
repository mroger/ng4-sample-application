import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule, MdDialogModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { BoardModule } from './workspace/board/board.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { ListOneService } from './workspace/board/column-one/shared/list-one.service';
import { ListTwoService } from './workspace/board/column-two/shared/list-two.service';
import { ListThreeService } from './workspace/board/column-three/shared/list-three.service';
import { ListFourService } from './workspace/board/column-four/shared/list-four.service';
import { ManagersService } from './workspace/board/shared/managers.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdNativeDateModule,
    WorkspaceModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    ListOneService,
    ListTwoService,
    ListThreeService,
    ListFourService,
    ManagersService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
