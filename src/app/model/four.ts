export class Four {
  id: number;
  description: string;
  managerId: number;
  startDate: Date;
  endDate: Date;
  weight: number;
  evolution: number;
  status: number;
  selectedCardThreeId: number;

  constructor(id: number, description: string, managerId: number, startDate: Date,
    endDate: Date, weight: number, evolution: number, status: number, selectedCardThreeId: number) {
      this.id = id;
      this.description = description;
      this.managerId = managerId;
      this.startDate = startDate;
      this.endDate = endDate;
      this.weight = weight;
      this.evolution = evolution;
      this.status = status;
      this.selectedCardThreeId = selectedCardThreeId;
  }
}
