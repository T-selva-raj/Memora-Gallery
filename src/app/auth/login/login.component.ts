import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
// import { loginData } from '../login';

import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  clearForm() {
    this.email.setValue('');
    this.password.setValue('');
  }
  navigate(dest:string) {
    this.router.navigate([`${dest}`]);
  }
}
