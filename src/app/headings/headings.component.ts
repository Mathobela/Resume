import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.css']
})
export class HeadingsComponent {
  @Input() icon: any;
  @Input() sectionHeading: any;
}
