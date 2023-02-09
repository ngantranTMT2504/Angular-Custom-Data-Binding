import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotify: boolean = false
  notify: string = "This website uses cookies to provide better user experience."

  closeNotification(){
    this.displayNotify = true;
  }
}
