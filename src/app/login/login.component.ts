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
    this.toggleLightTheme()

  }

  ngOnInit(): void {

  }

  clear() {
    this.formError = '';
    this.submitted = false
  }

  toggleLightTheme() {
    this.theme = document.body.classList.value
    if (this.theme != '') {
      document.body.classList.toggle('light-theme');
      this.logoPath = 'assets/darkModeLogo.png'
    }
  }



  signIn() {
    this.submitted = true
    if (this.loginForm.status == "VALID") {
      this.httpClient.post('http://localhost:3000/login', this.loginForm.value).subscribe((res: any) => {
        if (res.status !== 'ok') {
          this.formError = res.message
        }
        else {
          let navigate = this.commonservice.getRole(res.role)
          if (navigate == 'student') {
            this.commonservice.setStorage('rollnumber', res.mail.split('@')[0])
          }
          else {
            this.commonservice.setStorage('mail', res.mail)
          }
          this.router.navigate([navigate])
        }
      })
    }
  }

}
