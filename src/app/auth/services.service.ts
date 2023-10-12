import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  validdateCredentials(password:string,email:string) {
    console.log("email",email);
    // let password1 = [];

    var error: {
      email: string,
      password:any
    } = {
      email: '',
      password:[]
    };
    if (password.includes(" ")) error.password.push("password cannot contain spaces");
    if (password.length < 8) error.password.push("password must contain 8 charecters");
    if (!password.match(/.*[A-Z].*/)) error.password.push("password must contain one upper case letter");
    if (!password.match(/.*[a-z].*/)) error.password.push("password must contain one upper case letter");
    if (!password.match(/.*[^A-Za-z0-9].*/)) error.password.push("password must contain one special charecter");
    if (!email.match(/.^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      console.log(email);
      
      error.email = "Invalid email !"
    };
    console.log(error);
    
    return error;
  }
}
