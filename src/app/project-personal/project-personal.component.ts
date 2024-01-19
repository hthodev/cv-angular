import { Component } from '@angular/core';
import { projectPersonals, moreProjectPersonals } from 'src/data/dataRender';

@Component({
  selector: 'app-project-personal',
  templateUrl: './project-personal.component.html',
  styleUrls: ['../css-common/common.css']
})
export class ProjectPersonalComponent {
  projectPersonals:any;
  moreInfo: any;

  ngOnInit() {
    this.projectPersonals = projectPersonals;    
    this.moreInfo = moreProjectPersonals;
  }
}
