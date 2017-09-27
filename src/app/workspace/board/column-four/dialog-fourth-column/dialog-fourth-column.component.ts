import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { One } from '../../column-one/shared/one.model';
import { Two } from '../../column-two/shared/two.model';
import { Three } from '../../column-three/shared/three.model';
import { Manager } from '../../shared/manager';
import { Status } from '../../shared/status';
import { FourthColumn } from '../shared/fourth-column';
import { ListOneService } from '../../column-one/shared/list-one.service';
import { ListTwoService } from '../../column-two/shared/list-two.service';
import { ListThreeService } from '../../column-three/shared/list-three.service';
import { ManagersService } from '../../shared/managers.service';

@Component({
  selector: 'app-dialog-fourth-column',
  templateUrl: './dialog-fourth-column.component.html',
  styleUrls: ['./dialog-fourth-column.component.css']
})
export class DialogFourthColumnComponent implements OnInit {

  selectedCardOne: One;
  selectedCardTwo: Two;
  selectedCardThree: Three;

  inputDescription: string;
  inputManager: Manager;
  inputStartDate: Date;
  inputEndDate: Date;
  inputWeight: number;
  inputEvolution: number;
  inputStatus: number;

  managers: Array<Manager>;

  statuses: Array<Status>;

  filteredOptions: Observable<Array<Manager>>;
  managerChangedNotifiedSource = new Subject<Array<Manager>>();

  constructor(
    public dialogRef: MdDialogRef<DialogFourthColumnComponent>,
    private listOneService: ListOneService,
    private listTwoService: ListTwoService,
    private listThreeService: ListThreeService,
    private managersService: ManagersService,
    @Inject(MD_DIALOG_DATA) public data: FourthColumn) {
      console.log('Received data on dialog: ', data);
      this.selectedCardOne = listOneService.getCardItem(data.selectedCardOneId);
      this.selectedCardTwo = listTwoService.getCardItem(data.selectedCardTwoId);
      this.selectedCardThree = listThreeService.getCardItem(data.selectedCardThreeId);
      console.log('Found selectedCardOne: ', this.selectedCardOne);
      console.log('Found selectedCardTwo: ', this.selectedCardTwo);
      console.log('Found selectedCardThree: ', this.selectedCardThree);
    }

  ngOnInit() {
    this.loadAllManagers();
    this.loadStatuses();
    this.filteredOptions = this.managerChangedNotifiedSource.asObservable();
  }

  loadAllManagers(): void {
    this.managers = this.managersService.findAll();
  }

  loadStatuses(): void {
    this.statuses = new Array<Status>();
    this.statuses.push(new Status(1, 'Nao iniciado'));
    this.statuses.push(new Status(2, 'Em andamento'));
    this.statuses.push(new Status(3, 'Comprometido'));
    this.statuses.push(new Status(4, 'Suspenso'));
    this.statuses.push(new Status(5, 'Cancelado'));
  }

  criarItem(): void {
    console.log('Criando item');
    console.log('Description: ', this.inputDescription);
    console.log('Manager: ', this.inputManager);
    console.log('Data inicio: ', this.inputStartDate);
    console.log('Data fim: ', this.inputEndDate);
    console.log('Peso: ', this.inputWeight);
    console.log('Evolucao: ', this.inputEvolution);
    console.log('Status: ', this.inputStatus);
    this.dialogRef.close(
      new FourthColumn(this.selectedCardOne.id, this.selectedCardTwo.id, this.selectedCardThree.id,
        this.inputDescription, this.inputManager.id, this.inputStartDate, this.inputEndDate, this.inputWeight,
        this.inputEvolution, this.inputStatus));
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
