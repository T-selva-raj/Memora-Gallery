import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CardPageComponent } from './card-page/card-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteGuardGuard } from './route-guard.guard';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: MainComponent },
  {
    path: "gallery", component: CardPageComponent,
    canActivate:[RouteGuardGuard]
  },
  {
    path: "profile", component: ProfileComponent,
    canActivate:[RouteGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
