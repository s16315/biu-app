import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) {
  }

  userLogin: FormGroup;

  ngOnInit() {
    this.userLogin = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submitForm() {
    if (this.userLogin.value.login === 'admin' && this.userLogin.value.password === '1234' ) {
      this.router.navigate(['/user']);
    }
  }
  registerUser() {
    this.router.navigate(['/register']);
  }
}
