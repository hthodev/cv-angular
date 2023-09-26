import { Component } from '@angular/core';
import { awards } from 'src/data/dataRender';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
})
export class AwardComponent {
  awards: any;

  ngOnInit() {
    this.awards = awards
  }
}
