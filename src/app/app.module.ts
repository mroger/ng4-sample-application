import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule, MdDialogModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListOneService } from "./services/list-one.service";
import { ListTwoService } from "./services/list-two.service";
import { ListThreeService } from "./services/list-three.service";
import { ListFourService } from "./services/list-four.service";
import { CardOneToCardTwoNotificationService } from "./services/notification/card-one-to-card-two-notification.service";
import { CardTwoToCardThreeNotificationService } from "./services/notification/card-two-to-card-three-notification.service";
import { CardThreeToCardFourNotificationService } from "./services/notification/card-three-to-card-four-notification.service";
import { ManagersService } from "./services/managers.service";
import { BoardModule } from "./board/board.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MdNativeDateModule,
    BoardModule
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
