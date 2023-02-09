import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  source: string = "/assets/shopping.jpg"
  logan: string = 'Your one stop shop for everything'
  width: number = 320
}
