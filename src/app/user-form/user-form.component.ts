import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';
import {User} from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userData: FormGroup;
  user: User = new User();

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.userData = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', [Validators.pattern('[0-9\\+\\-\\(\\) ]{9,}')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[@#$%^&]).+'), Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, ]],
      pet: ['other'],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        building: ['', Validators.required],
        flatNo: [''],
      }),
      consents: this.fb.group({
        newsletter: [true, Validators.required],
        sms: [false],
      })
    }, {
      validator: this.mustMatch('confirmPassword', 'password')
    });

  }
  submitForm() {
    this.user = this.userData.value;
    console.log(this.user);
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (formGroup.controls[controlName].value !== matchingControl.value) {
        formGroup.controls[controlName].setErrors({ mustMatch: true });
      } else {
        formGroup.controls[controlName].setErrors(null);
      }
    };
  }
}
