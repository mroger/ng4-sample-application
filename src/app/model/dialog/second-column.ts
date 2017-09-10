export class SecondColumn {
  selectedCardOneId: number;
  name: string;
  goals: Array<string>;

  constructor(selectedCardOneId: number, name: string, goals: Array<string>) {
    this.selectedCardOneId = selectedCardOneId;
    this.name = name;
    this.goals = goals;
  }
}