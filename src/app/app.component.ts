import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webclub';
  width: any;
  constructor() {
    this.constructorcall();
  }

  ngOnInit(): void {

  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth
  }

  constructorcall() {
    this.width = window.innerWidth
    if (top?.location != self.location) {
      let a = top?.location
      a = self.location
    }
  }

}
