import { Component } from '@angular/core';

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
    this.position = 'Back-end Developer'
    this.age = 22;
    this.email = 'thienthotran.it@gmail.com';
    this.subject = 'mailto:thienthotran.it@gmail.com?subject=Hi, Welcome to me!'
    this.facebook = 'Thien Tho Tran';
    this.linkFacebook = 'http://facebook.com/thientho.it'
    this.phone = '+84775589593';
    this.address = 'Lien Chieu - Da Nang - Quang Nam';
    this.education = 'Su Pham University - Da Nang University'
  }
}
