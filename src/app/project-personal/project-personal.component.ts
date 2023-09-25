import { Component } from '@angular/core';
import { projectPersonals } from 'src/data/dataRender';

@Component({
  selector: 'app-project-personal',
  templateUrl: './project-personal.component.html',
  styleUrls: ['./project-personal.component.css']
})
export class ProjectPersonalComponent {
  projectPersonals:any;

  ngOnInit() {
    this.projectPersonals = projectPersonals
  }
}
