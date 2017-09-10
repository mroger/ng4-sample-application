import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule, MdDialogModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DialogFirstColumnComponent } from './dialog-first-column/dialog-first-column.component';
import { ListOneComponent } from './list-one/list-one.component';
import { ListTwoComponent } from './list-two/list-two.component';
import { ListThreeComponent } from './list-three/list-three.component';
import { ListFourComponent } from './list-four/list-four.component';
import { BoardComponent } from './board/board.component';
import { ListOneService } from "./services/list-one.service";
import { ListTwoService } from "./services/list-two.service";
import { ListThreeService } from "./services/list-three.service";
import { ListFourService } from "./services/list-four.service";
import { CardOneToCardTwoNotificationService } from "./services/notification/card-one-to-card-two-notification.service";
import { CardTwoToCardThreeNotificationService } from "./services/notification/card-two-to-card-three-notification.service";
import { CardThreeToCardFourNotificationService } from "./services/notification/card-three-to-card-four-notification.service";
import { DialogSecondColumnComponent } from './dialog-second-column/dialog-second-column.component';
import { DialogThirdColumnComponent } from './dialog-third-column/dialog-third-column.component';
import { ManagersService } from "./services/managers.service";
import { DialogFourthColumnComponent } from './dialog-fourth-column/dialog-fourth-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogFirstColumnComponent,
    ListOneComponent,
    ListTwoComponent,
    ListThreeComponent,
    ListFourComponent,
    BoardComponent,
    DialogSecondColumnComponent,
    DialogThirdColumnComponent,
    DialogFourthColumnComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MdNativeDateModule
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
  entryComponents: [
    DialogFirstColumnComponent,
    DialogSecondColumnComponent,
    DialogThirdColumnComponent,
    DialogFourthColumnComponent
  ]
})
export class AppModule { }
