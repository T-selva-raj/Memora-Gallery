import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { AuthServiceService } from '../auth/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AsyncValidationService {
  constructor(http: HttpClient) { }

  //  checkDuplicate(service: AuthServiceService): AsyncValidatorFn {
  //   return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  //     return service.checkMail(control).pipe(map((res:any) => {
  //         console.log(res);
  //         const isDuplicate = true;
  //         return isDuplicate ? { 'duplicate': true } : null;
  //       }));
  //   }
  // }
}
