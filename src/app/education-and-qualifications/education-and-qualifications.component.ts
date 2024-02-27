import { Component } from '@angular/core';
import {Education} from "../model/education";

@Component({
  selector: 'app-education-and-qualifications',
  templateUrl: './education-and-qualifications.component.html',
  styleUrls: ['./education-and-qualifications.component.css']
})
export class EducationAndQualificationsComponent {
  icon: any;
  sectionHeading: string = "";
  qualifications: Education[] = [];

  ngOnInit() {
    this.icon = "bi bi-mortarboard";
    this.sectionHeading = "Education and Qualifications"
    this.qualifications.push(new Education("BSc. Mining Engineering", "University of the Witwatersrand", "2018"));
    this.qualifications.push(new Education("NQF5 Systems Development", "Umuzi Organisation", "2022"));
  }
}
