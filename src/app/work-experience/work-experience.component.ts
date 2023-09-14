import { Component } from '@angular/core';
import { workingExperience } from 'src/data/dataRender';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workingExp:any;

  ngOnInit() {
    this.workingExp = workingExperience
  }
}
