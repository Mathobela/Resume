export class WorkHistory {
  position: string;
  company: string;
  date: string;

  constructor(position: string, company: string, date: string) {
    this.position = position;
    this.company = company;
    this.date = date;
  }
}
