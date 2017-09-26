import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Manager } from '../../../../model/manager';
import { ListOneService } from '../../../../services/list-one.service';
import { ListTwoService } from '../../../../services/list-two.service';
import { ManagersService } from '../../../../services/managers.service';
import { ThirdColumn } from '../../../../model/dialog/third-column';
import { One } from '../../column-one/shared/one.model';
import { Two } from '../../column-two/shared/two.model';

@Component({
  selector: 'app-dialog-third-column',
  templateUrl: './dialog-third-column.component.html',
  styleUrls: ['./dialog-third-column.component.css']
})
export class DialogThirdColumnComponent implements OnInit {

  selectedCardOne: One;
  selectedCardTwo: Two;

  inputName: string;
  inputManager: Manager;
  inputTargetDate: Date;

  managers: Array<Manager>;

  filteredOptions: Observable<Array<Manager>>;
  managerChangedNotifiedSource = new Subject<Array<Manager>>();

  constructor(
    public dialogRef: MdDialogRef<DialogThirdColumnComponent>,
    private listOneService: ListOneService,
    private listTwoService: ListTwoService,
    private managersService: ManagersService,
    @Inject(MD_DIALOG_DATA) public data: ThirdColumn) {
      console.log('Received data on dialog: ', data);
      this.selectedCardOne = listOneService.getCardItem(data.selectedCardOneId);
      this.selectedCardTwo = listTwoService.getCardItem(data.selectedCardTwoId);
      console.log('Found selectedCardOne: ', this.selectedCardOne);
      console.log('Found selectedCardTwo: ', this.selectedCardTwo);
    }

  ngOnInit() {
    this.loadAllManagers();
    this.filteredOptions = this.managerChangedNotifiedSource.asObservable();
  }

  loadAllManagers(): void {
    this.managers = this.managersService.findAll();
  }

  // filter(manager: Manager): Array<Manager> {
  //   return this.managers.filter(filteringManager =>
  //     filteringManager.name.toLowerCase().indexOf(manager.name.toLowerCase()) === 0);
  // }

  criarItem(): void {
    console.log('Criando item');
    console.log('Name: ', this.inputName);
    console.log('Manager: ', this.inputManager);
    console.log('Data alvo: ', this.inputTargetDate);
    this.dialogRef.close(new ThirdColumn(
      this.selectedCardOne.id, this.selectedCardTwo.id, this.inputName, this.inputManager.id, this.inputTargetDate));
  }

  displayFn(manager: Manager): string {
    console.log('Manager escolhido: ', manager);
    return manager ? manager.name : '';
  }

  applyManagerFilter(event: KeyboardEvent): void {
    const inputManagerName =
      (typeof this.inputManager === 'object' ? this.inputManager.name : this.inputManager) || '';
    const filteredManagers = this.managers
      .filter(filteringManager => {
        return filteringManager.name.toLowerCase().startsWith(inputManagerName.toLowerCase());
      });
    this.managerChangedNotifiedSource.next(filteredManagers);
  }

}
