import { Injectable ,Inject} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,map} from 'rxjs/operators';
import {  Observable,throwError } from 'rxjs';
import { AppError} from '../common/app.error';
import {NotFoundError} from '../common/Notfound.error';
import {badRequest} from '../common/badRequest.error';

@Injectable()
export class DataService {

  constructor(private http:HttpClient,@Inject(String)private url:string) { }
    
  /*

  Resubale Data service 
  All methods of http class will return observables we need to subscribe to the method to get the data. 

  */

  getAll()
  {
    return this.http.get(this.url);  
  }

  create(resource:HTMLInputElement)
  {
      return this.http.post(this.url,JSON.stringify({title:resource.value})).pipe(map((response:any)=>{ return response;}),
      catchError((error:HttpErrorResponse)=>{
        if(error.status==400)
          return throwError(new badRequest())
        return throwError(new AppError());
      }))
     
  }

  update(resource:{userId?:string,id?:string,title:string,body?:string})
  {

    return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead:true}))

  }

  delete(resource:any) 
  {
    return this.http.delete(this.url+'/'+resource.id).pipe(catchError((error:HttpErrorResponse)=>{
      if(error.status==404)
          return throwError(new NotFoundError());
        return throwError("jhh");
    })) 
  }
 
}
