import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidatorService } from 'src/app/helpers/customvalidator.service';
import { ResetPass } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
showPassword: boolean = false;
form: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    key: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  }, [CustomvalidatorService.MatchValidator('newPassword','confirm_password')]);
  }
  get f() {
    return this.form.controls;
  }
  reset(form: ResetPass): void {
    this.authService.resetPassword(form).subscribe(() => {
      this.router.navigateByUrl('/auth')
    }, (err:any) => {
      console.log(err);
    })
  }
    get passwordMatchError() {
    return (this.form.getError('mismatch') && this.form.get('confirm_password')?.touched)
  }

}
