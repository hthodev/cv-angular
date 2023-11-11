import { Component } from '@angular/core';
import { info } from 'src/data/dataRender';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  position: any;
  age: any;
  email: any;
  subject:any;
  facebook: any;
  linkFacebook:any;
  phone: any;
  address: any;
  education: any;

  ngOnInit(): void {
    this.position = info.position;
    this.age = info.age;
    this.email = info.email;
    this.subject = info.subject;
    this.facebook = info.facebook;
    this.linkFacebook = info.linkFacebook;
    this.phone = info.phone;
    this.address = info.address;
  }
}
