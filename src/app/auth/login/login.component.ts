import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
})
  
  
export class LoginComponent {
  isToggled = false;
  isLoader = false;
  
  constructor(private router: Router, private auth: AuthServiceService) { }
  
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/)
    ])
  });

  navigate(dest: string) {
    this.router.navigate([`${dest}`]);
  }

  checkPassword() {
    const passwordControl = this.signInForm.get('password');
    if (passwordControl?.hasError('required')) return 'Password is required';
    if (passwordControl?.hasError('minlength')) return 'Password must be at least 8 characters long';
    if (passwordControl?.hasError('pattern')) return 'Password must contain at least one lowercase, one uppercase, and one special character';
    return '';
  }
  
  onFormSubmit(formData: object) {
    this.isLoader = !this.isLoader;
    if (this.signInForm.valid) {
      this.auth.SignInUser(formData).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoader = !this.isLoader;
          this.router.navigate(['gallery']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}
