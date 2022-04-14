import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-signin',
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.scss']
})
export class LoginSigninComponent implements OnInit {

  public loginForm!: FormGroup;
  public signinForm!: FormGroup;
  loginActive = 'active'
  signinActive = '';
  userName = '';
  isLoading = false;
  error: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    this.signinForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onChange(type: string) {
    if (type === 'login') {
      this.loginActive = 'active';
      this.signinActive = '';
    } else {
      this.signinActive = 'active';
      this.loginActive = '';
    }
  }

  onLogin() {
    this.isLoading = true;
    let loginData = {email: this.loginForm.value.email, password: this.loginForm.value.password, returnSecureToken: true};
    this.authService.login(loginData).subscribe(
      res => {
        this.isLoading = false;
        this.authService.setUser(res);
        this.router.navigate(['/inshorts']);
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage; 
      }
    )

  }

  onSignin() {
    this.isLoading = true;
    let signupData = { email: this.signinForm.value.email, password: this.signinForm.value.password, returnSecureToken: true }
    console.log(this.signinForm.value.email);
    this.authService.signup(signupData).subscribe(
      res => {
        this.isLoading = false;
        this.authService.setUser(res);
        this.router.navigate(['/inshorts']);
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    )

  }

}
