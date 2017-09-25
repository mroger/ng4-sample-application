import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule, MdDialogModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListOneService } from './services/list-one.service';
import { ListTwoService } from './services/list-two.service';
import { ListThreeService } from './services/list-three.service';
import { ListFourService } from './services/list-four.service';
import { CardOneToCardTwoNotificationService } from './services/notification/card-one-to-card-two-notification.service';
import { CardTwoToCardThreeNotificationService } from './services/notification/card-two-to-card-three-notification.service';
import { CardThreeToCardFourNotificationService } from './services/notification/card-three-to-card-four-notification.service';
import { ManagersService } from './services/managers.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { BoardModule } from './workspace/board/board.module';
import { WorkspaceModule } from './workspace/workspace.module';

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
    CardOneToCardTwoNotificationService,
    CardTwoToCardThreeNotificationService,
    CardThreeToCardFourNotificationService,
    ManagersService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
