import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  fullName:any;
  description: any;

  ngOnInit(): void {
    this.fullName = "Tran Huu Tho";
    this.description = "Front-end Developer and Graphic Designer"
  }
}
