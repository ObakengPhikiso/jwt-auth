import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signin } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

form: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
  });
  }
  get f() {
    return this.form.controls;
  }
  reset(): void {
    this.authService.forgotPassword(this.form.value.mail).subscribe(() => {
      this.router.navigateByUrl('/auth')
    }, (err:any) => {
      console.log(err);
    })
  }
}
