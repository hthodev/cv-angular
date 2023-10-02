import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['../css-common/common.css']
})
export class ScrollUpComponent implements AfterViewInit {
  ngAfterViewInit() {
    window.onscroll = () => {
      this.scrollFunction();
    };
  }

  scrollFunction() {
    const mybutton = document.getElementById("myBtn");

    if (mybutton) {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
