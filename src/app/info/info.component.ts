import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  introduction: any;
  age: any;
  email: any;
  subject:any;
  facebook: any;
  linkFacebook:any;
  phone: any;
  address: any;

  ngOnInit(): void {
    this.introduction = `
    <p> Hello! I’m Walter Patterson. I am passionate about UI/UX design and Web Design. I am a skilled
      <strong>front-end developer</strong>
      and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done.
    </p>
    <p>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas. </p>`;
    this.age = 22;
    this.email = 'thienthotran.it@gmail.com';
    this.subject = 'mailto:thienthotran.it@gmail.com?subject=Hi, Welcome to me!'
    this.facebook = 'Thien Tho Tran';
    this.linkFacebook = 'http://facebook.com/thientho.it'
    this.phone = '+84775589593';
    this.address = 'Lien Chieu - Da Nang - Quang Nam'
  }
}
