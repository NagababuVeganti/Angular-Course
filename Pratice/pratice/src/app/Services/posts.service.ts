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
export class PostsService {

  private url='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

    
  /*

  All methods of http class will return observables we need to subscribe to the method to get the data. 

  */

  getPosts()
  {
    return this.http.get(this.url);  
  }

  createPost(post:HTMLInputElement)
  {
      return this.http.post(this.url,JSON.stringify({title:post.value}))
      .pipe(catchError((error:HttpErrorResponse)=>{
        if(error.status==400)
          return throwError(new badRequest())
        return throwError(new AppError());
      }))
     
  }

  updatePost(post:{userId?:string,id?:string,title:string,body?:string})
  {

    return this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))

  }

  deletePost(post:any) 
  {
    return this.http.delete(this.url+'/'+post.id).pipe(catchError((error:HttpErrorResponse)=>{
      if(error.status==404)
          return throwError(new NotFoundError());
        return throwError("jhh");
    })) 
  }
 
}
