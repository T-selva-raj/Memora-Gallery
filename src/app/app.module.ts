import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { MainComponent } from './main/main.component';
import { CommonModuleModule } from './common-module/common-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardPageComponent } from './card-page/card-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CardPageComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    AuthModule,
    CommonModuleModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
