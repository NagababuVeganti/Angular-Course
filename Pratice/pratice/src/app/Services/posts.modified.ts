import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import {  Observable,throwError } from 'rxjs';
import { AppError} from '../common/app.error';
import {NotFoundError} from '../common/Notfound.error';
import {badRequest} from '../common/badRequest.error';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class PostsServiceModified extends DataService {

  //private url='https://jsonplaceholder.typicode.com/posts'

  constructor(http:HttpClient) 
  { 
      super(http,'https://jsonplaceholder.typicode.com/posts')
  }

  /*

  All methods of http class will return observables we need to subscribe to the method to get the data. 

  */

}
