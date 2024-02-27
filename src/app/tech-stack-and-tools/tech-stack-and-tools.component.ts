import { Component } from '@angular/core';
import {Tools} from "../model/tools";

@Component({
  selector: 'app-tech-stack-and-tools',
  templateUrl: './tech-stack-and-tools.component.html',
  styleUrls: ['./tech-stack-and-tools.component.css']
})
export class TechStackAndToolsComponent {
  icon: any;
  sectionHeading: string | undefined;
  techStackAndTools: Tools[] = [];

  ngOnInit() {
    this.icon = "bi bi-mouse2";
    this.sectionHeading = "Tech Stack and Tools"
    this.techStackAndTools.push(new Tools("Java 8/11/17", "SpringBoot", "Git"));
    this.techStackAndTools.push(new Tools("JavaScript", "Angular", "Intellij"));
    this.techStackAndTools.push(new Tools("PL/SQL", "Spring Framework", "Jira"));
    this.techStackAndTools.push(new Tools("TypeScript", "Bootstrap", "Confluence"));
    this.techStackAndTools.push(new Tools("PostgreSQL", "Redux", "Bamboo"));
    this.techStackAndTools.push(new Tools("HTML5/CSS", "", "Docker"));



  }
}
