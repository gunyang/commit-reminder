import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  emails: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addEmail(newEmail: string) {
    if (newEmail) {
      this.emails.push(newEmail);
    }
  }
}
