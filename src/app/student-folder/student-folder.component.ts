import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-folder',
  templateUrl: './student-folder.component.html',
  styleUrls: ['./student-folder.component.css']
})
export class StudentFolderComponent implements OnInit {

  theme: any = document.body.classList.value
  logoPath: any = 'assets/darkModeLogo.png'
  themeButtonStatus: any = 'bx bxs-moon bx-tada bx-rotate-180'
  constructor() { }

  ngOnInit(): void {
  }

  toggleLightTheme() {
    document.body.classList.toggle('light-theme');
    this.theme = document.body.classList.value
    if (this.theme == '') {
      this.logoPath = 'assets/darkModeLogo.png'
      this.themeButtonStatus = 'bx bxs-moon bx-tada bx-rotate-180'
    }
    else {
      this.logoPath = 'assets/lightModeLogo.png'
      this.themeButtonStatus = 'bx bxs-sun bx-tada bx-rotate-180'
    }
  }
}
