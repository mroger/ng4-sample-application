export class Two {
  id: number;
  name: string;
  goals: Array<string>;
  selectedCardOneId: number;

  constructor(id: number, name: string, goals: Array<string>, selectedCardOneId: number) {
    this.id = id;
    this.name = name;
    this.goals = goals;
    this.selectedCardOneId = selectedCardOneId;
  }
}