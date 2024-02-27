export class Education {
  qualification: string = "";
  institution: string = "";
  date: string = "";

  constructor(qualification: string, institution: string, date: string) {
    this.qualification = qualification;
    this.institution = institution;
    this.date = date;
  }
}
