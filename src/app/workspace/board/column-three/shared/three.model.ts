export class Three {
  id: number;
  name: string;
  managerId: number;
  targetDate: Date;
  selectedCardTwoId: number;

  constructor(id: number, name: string, managerId: number, targetDate: Date, selectedCardTwoId: number) {
    this.id = id;
    this.name = name;
    this.managerId = managerId;
    this.targetDate = targetDate;
    this.selectedCardTwoId = selectedCardTwoId;
  }
}