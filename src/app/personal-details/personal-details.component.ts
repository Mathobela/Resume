import { Component } from '@angular/core';
import {PersonalDetails} from "../model/personalDetails";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  icon: any;
  sectionHeading: string | undefined;
  personalDetails: PersonalDetails | undefined;


  ngOnInit() {
    this.icon = "bi bi-person";
    this.sectionHeading = "Personal Details"
    this.personalDetails = new PersonalDetails(
      "Mathobela Mawasha",
      "0721738141",
      "mathobela.mawasha@outlook.com",
      "https://github.com/Mathobela",
      "https://linkedin.com/in/mathobela-paulina-mawasha-b70042b0")
  }
}
