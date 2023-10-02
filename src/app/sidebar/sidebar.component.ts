import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  titleName: any;

  ngOnInit(): void {
    this.titleName = 'Tran Huu Tho';

    // Sử dụng kiểu ép kiểu để TypeScript biết bạn đang sử dụng document
    const navbar = document.getElementById("nav") as HTMLElement;

    if (navbar) {      
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }
}
