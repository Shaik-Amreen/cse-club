import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webclub';
  constructor() {
    this.constructorcall();
  }

  constructorcall() {
    if (top?.location != self.location) {
      let a = top?.location
      a = self.location
    }
  }

}
