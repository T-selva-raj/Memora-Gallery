import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import API_ROUTES from 'src/routes'; 
import { fetchProfile } from './../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,) { }
  
  
  getUserProfile(userId:number):Observable<fetchProfile> {
    return this.http.get<fetchProfile>(API_ROUTES.PROFILE).pipe(
      catchError(this.errorHandler)
    );
  }  
  

  errorHandler(error: HttpErrorResponse) {
    return throwError(error?.error || 'Server error');
  }
}
