import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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


  constructor() {
    this.loginForm = new FormGroup({
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

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
    console.log(this.loginForm.controls['mail'])
    console.log(this.loginForm.value)
    this.submitted = true
  }

}
