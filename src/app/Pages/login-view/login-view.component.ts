import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from 'express';
import { LoginModel } from '../../models/loginModel';


@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss'
})

export class LoginViewComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { "https://42we.tech/" }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]],
      }
    );
  }

  // submitLogin() {
  //   debugger
  //   const dataLogin = this.loginForm.getRawValue() as LoginModel;
  // }

  onClick() {
    console.log("TESTE CLICK");
  }
}