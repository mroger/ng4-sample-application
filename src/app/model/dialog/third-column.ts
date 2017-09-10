export class ThirdColumn {
  selectedCardOneId: number;
  selectedCardTwoId: number;
  name: string;
  managerId: number;
  targetDate: Date;

  constructor(selectedCardOneId: number, selectedCardTwoId: number, name: string,
      managerId: number, targetDate: Date) {
    this.selectedCardOneId = selectedCardOneId;
    this.selectedCardTwoId = selectedCardTwoId;
    this.name = name;
    this.managerId = managerId;
    this.targetDate = targetDate;
  }
}