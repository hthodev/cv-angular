import { Component } from '@angular/core';
import { hobbies } from 'src/data/dataRender';

@Component({
  selector: 'app-hobbie',
  templateUrl: './hobbie.component.html',
})
export class HobbieComponent {
  hobbies: any;

  ngOnInit() {
    this.hobbies = hobbies
  }
}
