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
  checkPassword() {
    const passwordControl = this.signUpForm.get('password');
    if (passwordControl?.hasError('required')) return 'Password is required';
    if (passwordControl?.hasError('minlength')) return 'Password must be at least 8 characters long';
    if (passwordControl?.hasError('pattern')) return 'Password must contain at least one lowercase, one uppercase, and one special character';
    return '';
  }
  OnFormSubmit(data: any) {
    this.isLoader = !this.isLoader;
    if (this.signUpForm.valid) {
      this.auth.SignUpUser(data).subscribe({
        next: (res) => {
          this.isLoader = !this.isLoader;
          this.signUpForm.reset();
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.isLoader = !this.isLoader;
          this.error_message = "An error occurred during signup. Please try again later.";
        }
      });
    }
  }  
}
