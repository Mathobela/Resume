export class PersonalDetails {
  name: string;
  cell: string;
  email: string;
  gitHub: string;
  linkedIn: string;

  constructor(name:string, cell:string, email:string, gitHub:string, linkedIn:string) {
    this.name = name;
    this.cell = cell;
    this.email = email;
    this.gitHub = gitHub;
    this.linkedIn = linkedIn;
  }
}
