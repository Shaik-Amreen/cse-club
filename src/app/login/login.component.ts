import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  theme: any = document.body.classList.value
  logoPath: any = 'assets/darkModeLogo.png'
  loginForm: FormGroup
  submitted: any = false
  formError: any = ''


  constructor(private httpClient: HttpClient, private commonservice: CommonService, private router: Router) {
    this.loginForm = new FormGroup({
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

  }

  clear() {
    this.formError = '';
    this.submitted = false
  }

  toggleLightTheme() {
    document.body.classList.toggle('light-theme');
    this.theme = document.body.classList.value
    if (this.theme == '') {
      this.logoPath = 'assets/darkModeLogo.png'
    }
    else {
      this.logoPath = 'assets/lightModeLogo.png'
    }
  }



  signIn() {
    this.submitted = true
    if (this.loginForm.status == "VALID") {
      this.httpClient.post('http://localhost:3000/login', this.loginForm.value).subscribe((res: any) => {
        if (!res.role) {
          this.formError = res.message
        }
        else {
          let navigate = this.commonservice.getRole(res.role)
          this.router.navigate([navigate])
        }
      })
    }
  }

}
