import { Component } from '@angular/core';
import { practicalProjects } from 'src/data/dataRender';

@Component({
  selector: 'app-practical-project',
  templateUrl: './practical-project.component.html',
  styleUrls: ['../css-common/common.css']
})
export class PracticalProjectComponent {
  practicalProjects:any;
  
  ngOnInit() {
    this.practicalProjects = practicalProjects
  }
}
