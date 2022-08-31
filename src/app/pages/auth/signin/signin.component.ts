import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signin } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: any;
  showPassword: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });
  }
  get f() {
    return this.form.controls;
  }
  signin(user: Signin): void {
    this.authService.signin(user).subscribe(() => {
      this.router.navigateByUrl('')
    }, (err:any) => {
      console.log(err);
    })
  }
}
