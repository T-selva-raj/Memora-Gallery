import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
// import { loginData } from '../login';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
})
  
  
export class LoginComponent {
//   constructor(private router: Router, private service: ServicesService) { }
//   type = "password";
//   // email !:string;
//   // password!: string;
//   // loginData = new loginData("sel@mailinator.com","Admin@12345");
//   loginData = new FormGroup({
//     email: new FormControl(''),
//     password: new FormControl('')
//   });

//   onchange(event: any) {
//     console.log(event.value);

//   }
//  navigate() {
//   const password = this.loginData.value.password ?? ''; 
//   const email = this.loginData.value.email ?? '';

//   const validationErrors = this.service.validdateCredentials(password, email);

//   if (validationErrors.email === "" && validationErrors.password.length==0) {
//     this.router.navigate(['/card']);
//   } else  {
//     window.alert(validationErrors.email); 
//   }
// }


//   showPassowrd() {
//     if (this.type == "password") this.type = "text";
//     else this.type = "password";
//   }
//   clearForm() {
//     // this.email = "";
//     // this.password = "";
//   }

}
