import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent, pathMatch: 'full'},
  {path: 'signup', component: RegisterComponent, pathMatch: 'full'},
  {path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full'},
  {path: 'reset/finish', component: ResetPasswordComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'signin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
