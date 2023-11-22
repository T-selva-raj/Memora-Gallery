import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpUser } from './auth-interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import API_ROUTES from 'src/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  SignUpUser(userData: object): Observable<SignUpUser> {
    return this.http.post<SignUpUser>(API_ROUTES.SIGNUP, userData)
      .pipe(
        catchError(this.errorHandler)
      );
  };

  SignInUser(userData: object) {
    return this.http.post(API_ROUTES.SIGNIN, userData)
      .pipe(
      catchError(this.errorHandler)
    )
  };

  errorHandler(error: HttpErrorResponse) {
    return throwError(error?.error || 'Server error');
  }
}
