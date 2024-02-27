import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationAndQualificationsComponent } from './education-and-qualifications/education-and-qualifications.component';
import { TechStackAndToolsComponent } from './tech-stack-and-tools/tech-stack-and-tools.component';
import { HeadingsComponent } from './headings/headings.component';
import { HeaderComponent } from './header/header.component';
import {BrowserModule} from "@angular/platform-browser";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    WorkExperienceComponent,
    EducationAndQualificationsComponent,
    TechStackAndToolsComponent,
    HeadingsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
