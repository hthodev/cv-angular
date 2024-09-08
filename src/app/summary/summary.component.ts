import { Component } from '@angular/core';
import { summaries } from 'src/data/dataRender';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  summaries: any;

  ngOnInit() {
    this.summaries = summaries
  }
}
