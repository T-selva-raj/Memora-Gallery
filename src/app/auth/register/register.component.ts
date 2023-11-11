import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) { }
  // registerForm=new FormGroup({
    
  // })
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/),
    Validators.minLength(8),
  ]);
  RePassword = new FormControl('', [Validators.required]);
  ngOnInit() {
   
  }
  checkMail() {
    if (this.email.hasError('required')) return 'Email Is Required';
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  clearForm() {
    this.email.reset();
    this.password.reset();
    this.RePassword.reset();
  }
   navigate() {
    this.router.navigate(['']);
   }
  
}
