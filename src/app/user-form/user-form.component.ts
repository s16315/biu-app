import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  registeredUserData: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.registeredUserData = this.fb.group({
      name: ['Tomek', Validators.required],
      surname: ['Mnich', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      pet: ['', Validators.required],
      address: this.fb.group({
        city: [''],
        street: [''],
        building: [''],
        flatNo: [''],
      }),
      consents: this.fb.group({
        newsletter: [true],
        sms: [true],
      })
    });

  }

}
