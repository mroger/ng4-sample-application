export class FourthColumn {
  selectedCardOneId: number;
  selectedCardTwoId: number;
  selectedCardThreeId: number;
  description: string;
  managerId: number;
  startDate: Date;
  endDate: Date;
  weight: number;
  evolution: number;
  status: number;

  constructor(selectedCardOneId: number, selectedCardTwoId: number, selectedCardThreeId: number,
    description: string, managerId: number, startDate: Date, endDate: Date,
    weight: number, evolution: number, status: number) {
      this.selectedCardOneId = selectedCardOneId;
      this.selectedCardTwoId = selectedCardTwoId;
      this.selectedCardThreeId = selectedCardThreeId;
      this.description = description;
      this.managerId = managerId;
      this.startDate = startDate;
      this.endDate = endDate;
      this.weight = weight;
      this.evolution = evolution;
      this.status = status;
  }
}