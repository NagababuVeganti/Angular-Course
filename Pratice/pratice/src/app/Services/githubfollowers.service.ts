import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import {  Observable,throwError } from 'rxjs';
import { AppError} from '../common/app.error';
import {NotFoundError} from '../common/Notfound.error';
import {badRequest} from '../common/badRequest.error';
@Injectable({
  providedIn: 'root'
})
export class gitHubFollowersService {

  private url='https://api.github.com/users/vojtajina/followers?per_page=100'

  constructor(private http:HttpClient) { }

    
  /*

  All methods of http class will return observables we need to subscribe to the method to get the data. 

  */

  getFollowers()
  {
    return this.http.get(this.url).
    pipe(
    catchError((error:HttpErrorResponse)=>{
        console.log(error.status)
        return throwError(new AppError());
    }));  
  }
}
