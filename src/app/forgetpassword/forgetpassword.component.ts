import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent implements OnInit {
  rollnumber: any;
  enterOtp: any;
  resOtp: any;
  invalidRoll: any;
  submitted: any;
  formError: String = '';
  invalidOtp: any;
  buttonStatus: any;
  otpButtonStatus: any;

  changePassword: FormGroup;
  oldPasswordData: boolean = true;
  newPasswordData: boolean = true;
  confirmPasswordData: boolean = true;
  changePasswordValidation:boolean = false;

  constructor() {
    this.changePassword = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          '(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]*'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  clearStatus() {
    this.invalidRoll = false;
    this.submitted = false;
    this.invalidOtp = false;
    this.formError = '';
    this.buttonStatus = 'Get Otp';
  }

  verifyOtp() {}

  getOtp() {}

  changePasswordSubmit() {
    console.log("welocme")
    this.changePasswordValidation = true;
    if (
      this.changePassword.controls['newPassword'].value !=
      this.changePassword.controls['confirmPassword'].value
    ) {
      this.changePassword.controls['confirmpassword'].setErrors({
        mustMatch: true,
      });
    }
    if (this.changePassword.status == 'VALID') {
    }
  }
}
