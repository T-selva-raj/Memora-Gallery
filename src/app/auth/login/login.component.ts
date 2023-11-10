import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
// import { loginData } from '../login';

import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
})
  
  
export class LoginComponent {
  constructor(private router: Router, private service: ServicesService) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/)
  ]);

  checkMail() {
    if (this.email.hasError('required')) return 'Email Is Required';
    return this.email.hasError('email') ? 'Not a valid email' : ''; 
  }
  checkPassword() {
    console.log(this.password.value);
    if (this.password.hasError('required')) return 'Password Is Required';
    if (this.password.hasError('minLength')) return 'Password must contain 8 charecters';
    if (this.password.hasError('pattern')) return 'Password must contain at one lowercase,Upper case and a special charecter ';
    
    return '';
  }
}
