import { Component } from '@angular/core';
import { projectPersonals } from 'src/data/dataRender';

@Component({
  selector: 'app-project-personal',
  templateUrl: './project-personal.component.html',
  styleUrls: ['../css-common/common.css']
})
export class ProjectPersonalComponent {
  projectPersonals:any;

  ngOnInit() {
    this.projectPersonals = projectPersonals
  }
}
