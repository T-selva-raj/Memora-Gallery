import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { SignInUser } from '../auth-interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
})
  
  
export class LoginComponent {
  isToggled = false;
  isLoader = false;
  error_message = '';

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
/**
 * Function which is used to validate the password
 * @returns 
 */
  checkPassword() {
    const passwordControl = this.signInForm.get('password');
    if (passwordControl?.hasError('required')) return 'Password is required';
    if (passwordControl?.hasError('minlength')) return 'Password must be at least 8 characters long';
    if (passwordControl?.hasError('pattern')) return 'Password must contain at least one lowercase, one uppercase, and one special character';
    return '';
  }
  /**
   * Finction which is used to SignIn
   * @param formData 
   */
  onFormSubmit(formData: object) {
    if (this.signInForm.valid) {
      this.isLoader = !this.isLoader;
      this.auth.SignInUser(formData).subscribe({
        next: (res:any) => {
          this.isLoader = !this.isLoader;
          if (res && res.status&&res.status==200) {
            this.router.navigate(['gallery']);
          }
          if (res && res.status && res.status == 422) {
            this.error_message = res?.message?.reason;
            this.signInForm.reset();
          }
          else this.error_message = "Somthing went Wrong !";
        },
        error: (error) => {
          console.log(error);
          this.isLoader = !this.isLoader;
          this.error_message = "An error occurred during signup.Please try again later.";
        }
      });
    }
  }
}
