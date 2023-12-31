import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CardPageComponent } from './card-page/card-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteGuardGuard } from './route-guard.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "login", component: LoginComponent,
    children: [
      {
        path: 'reset',
        component: ForgotPasswordComponent
      }
    ]
  },
  { path: "logout", component: MainComponent },
  {
    path: "gallery", component: CardPageComponent,
    canActivate:[RouteGuardGuard]
  },
  {
    path: "profile", component: ProfileComponent,
    canActivate: [RouteGuardGuard]
  },
  {
    path: 'edit-profile', component: EditProfileComponent,
    canActivate:[RouteGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
