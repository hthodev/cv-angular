import { Component } from '@angular/core';
import { workExperiences } from 'src/data/dataRender';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['../css-common/common.css']
})
export class WorkExperienceComponent {
  workExperiences:any;

  ngOnInit() {
    this.workExperiences = workExperiences
  }
}
