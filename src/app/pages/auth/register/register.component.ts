import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidatorService } from 'src/app/helpers/customvalidator.service';
import { Signup } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPassword: boolean = false;
  form: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form  = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  }, [CustomvalidatorService.MatchValidator('password','confirm_password')]);

  }

  signup(): void {
    let user: Signup = {
      role: 'Customer',
      user: {
        email: this.form.value.email, 
        password: this.form.value.password,
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname,
      }
    };
        
    this.authService.signup(user).subscribe(() => {
      this.router.navigateByUrl('auth/login')
    }, (err:any) => {
      console.log(err);
    })
  }

  get f() {
    return this.form.controls;
  }

  get passwordMatchError() {
    return (this.form.getError('mismatch') && this.form.get('confirm_password')?.touched)
  }

}
