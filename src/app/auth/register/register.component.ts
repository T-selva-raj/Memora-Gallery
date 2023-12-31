import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error_message = '';
  isToggled = false;
  isLoader = false;
  constructor(private router: Router, private auth: AuthServiceService) { }
  signUpForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/),
      Validators.minLength(8),
    ]),
    RePassword: new FormControl('', [Validators.required])
  });
  

  ngOnInit() {
   
  }
  navigate(dest: string) {
    this.router.navigate([`${dest}`]);
  }
  /**
   * Function is used to validathe the password
   * @returns 
   */
  checkPassword() {
    const passwordControl = this.signUpForm.get('password');
    if (passwordControl?.hasError('required')) return 'Password is required';
    if (passwordControl?.hasError('minlength')) return 'Password must be at least 8 characters long';
    if (passwordControl?.hasError('pattern')) return 'Password must contain at least one lowercase, one uppercase, and one special character';
    return '';
  }

  /**
   * function is used to sigup
   * @param data 
   */
  OnFormSubmit(data: any) {
    if (this.signUpForm.valid) {
      this.isLoader = !this.isLoader;
      this.auth.SignUpUser(data).subscribe({
        next: (res:any) => {
          this.isLoader = !this.isLoader;
          if (res && res.status && res.status == 200) {
            this.router.navigate(['/login']);
          }
          if (res && res.status && res.status == 422) {
            this.error_message = res?.message?.reason;
          }
          else this.error_message = "Somthing went Wrong !";
          this.signUpForm.reset();
        },
        error: (error) => {
          this.isLoader = !this.isLoader;
          this.error_message = "An error occurred during signup. Please try again later.";
        }
      });
    }
  }  
}

        