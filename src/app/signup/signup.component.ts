import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup; rollnumber: string = ""; otp: any = ''; resOtp: any = ''
  submitted: any = false; formError: any = ''
  logoPath: any = 'assets/darkModeLogo.png'
  vepa1: any = false; vepa2: any = false
  viewForm: any = false
  buttonStatus: any = 'Get OTP'
  otpButtonStatus: any = "Verify"
  enterOtp: any = ''
  invalidOtp: any = false
  course: any = [{ "label": "B.tech", "value": "btech" }, { "label": "MBA", "value": "mba" }, { "label": "MCA", "value": "mca" }]
  courseDetails: any = {
    "btech": [{ "label": "I", "value": "1" }, { "label": "II", "value": "2" },
    { "label": "III", "value": "3" }, { "label": "IV", "value": "4" }],
    "mba": [{ "label": "I", "value": "1" }, { "label": "II", "value": "2" }],

    "mca": [{ "label": "I", "value": "1" }, { "label": "II", "value": "2" }]
  }
  branch: any = {
    "btech": [{ "label": "CSE", "value": "cse" }, { "label": "ECE", "value": "ece" }, { "label": "EEE", "value": "eee" }, { "label": "CE", "value": "civil" }, { "label": "ME", "value": "mech" }, { "label": "CST", "value": "cst" }]
    ,
    "mba": [{ "label": "MBA", "value": "mba" }],
    "mca": [{ "label": "MCA", "value": "mca" }]
  }

  constructor(private httpClient: HttpClient) {
    this.submitted = false
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      rollnumber: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  invalidRoll: any = false

  getOtp() {

    this.submitted = true
    this.buttonStatus = 'Getting OTP ...'
    if (this.rollnumber.length == 10) {
      this.rollnumber = this.rollnumber.trim()
      this.signUpForm['controls'].rollnumber.setValue(this.rollnumber)
      this.httpClient.post('http://localhost:3000/generateOtp', { mail: this.rollnumber.toLocaleLowerCase() + '@mits.ac.in' }).subscribe((res: any) => {
        if (res.otp) {
          this.resOtp = res.otp
          this.submitted = false
        }
        else {
          this.formError = res.message
        }
      })
    }
    else {
      this.invalidRoll = true
    }
  }


  verifyOtp() {
    this.submitted = true
    this.buttonStatus = 'Getting OTP ...'
    if (this.enterOtp == this.resOtp) {
      this.viewForm = true
      this.submitted = false
    }
    else {
      this.invalidOtp = true
    }
  }

  clearStatus() {
    this.invalidRoll = false
    this.submitted = false
    this.invalidOtp = false
    this.formError = ''
    this.buttonStatus = 'Get Otp'
  }

  signUp() {
    this.submitted = true
    if (this.signUpForm.controls["password"].value !== this.signUpForm.controls["confirmPassword"].value) {
      this.signUpForm.controls["confirmPassword"].setErrors({ mustMatch: true })
    }
    else {

      if (this.signUpForm.status == 'INVALID') {
        const firstElementWithError = document.querySelector('.ng-invalid');
        if (firstElementWithError) {
          firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

      }
      else {
        let request = this.signUpForm.value
        request.mail = request.rollnumber + '@mits.ac.in'
        request.role = 0; request.details = { mobile: this.signUpForm.value.mobile }
        this.httpClient.post('http://localhost:3000/register', request).subscribe((res: any) => {
          if (!res.user) {
            this.formError = res.message
          }
          this.submitted = false
        })
      }
    }
  }

}
