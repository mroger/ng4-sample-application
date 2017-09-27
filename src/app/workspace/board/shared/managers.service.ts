import { Injectable } from '@angular/core';

import { Manager } from './manager';

@Injectable()
export class ManagersService {

  managers: Array<Manager>;

  constructor() {
    this.managers = new Array<Manager>();
    this.makeMockManagers();
  }

  makeMockManagers() {
    this.managers.push(new Manager(1, 'Gestor 1'));
    this.managers.push(new Manager(2, 'Gestor 2'));
    this.managers.push(new Manager(3, 'Gestor 3'));
    this.managers.push(new Manager(4, 'Gestor 4'));
    this.managers.push(new Manager(5, 'Gestor 5'));
  }

  findAll() {
    return this.managers;
  }

}
