import { Component } from '@angular/core';
import {WorkHistory} from "../model/workHistory";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  icon: any;
  sectionHeading: string | undefined;
  workHistory: WorkHistory[] = [];

  ngOnInit() {
    this.icon = "bi bi-briefcase";
    this.sectionHeading = "Work Experience"

    this.workHistory.push(new WorkHistory("Full Stack Developer (Junior)", "Discover Ltd", "Feb 2022- Present"));
    this.workHistory.push(new WorkHistory("Java Systems Development Learner", "Discover Ltd through Umuzi", "Feb 2021 - Jan2022"));
    this.workHistory.push(new WorkHistory("Transcriptionist", "Rev", "Nov 2018 - Nov 2019"));
    this.workHistory.push(new WorkHistory("Freelance Writer", "Rainbow Writers", "Jul 2018 - Oct 2018"));
    this.workHistory.push(new WorkHistory("Mining Engineering Intern", "Murray and Roberts", "Dec 2017 - Feb 2018"));
    this.workHistory.push(new WorkHistory("Mining Engineering Intern", "Sibanye Stillwaters", "Nov 2016 - Jan 2017"));

  }
}
