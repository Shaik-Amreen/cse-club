import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-admin-folder',
  templateUrl: './admin-folder.component.html',
  styleUrls: ['./admin-folder.component.css']
})
export class AdminFolderComponent implements OnInit {
  theme: any = document.body.classList.value
  logoPath: any = 'assets/darkModeLogo.png'
  themeButtonStatus: any = 'bx bxs-moon bx-tada bx-rotate-180'
  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService, private route: Router) {
    this.constructorCall()
  }

  constructorCall() {
    let role = this.commonService.getStorage('role')
    role = this.commonService.getRole(role)
    if (this.activatedRoute.snapshot.data.role !== role) {
      this.route.navigate(['/wb'])
    }
  }

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

  clearStorage() {
    sessionStorage.clear()
  }

}
