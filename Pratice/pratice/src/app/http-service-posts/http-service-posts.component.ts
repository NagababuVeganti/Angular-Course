import { Component,OnInit } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { AppError } from '../common/app.error';
import { badRequest } from '../common/badRequest.error';
import { PostsService } from '../Services/posts.service';
import { PostsServiceModified } from '../Services/posts.modified';
@Component({
  selector: 'app-http-service-posts',
  templateUrl: './http-service-posts.component.html',
  styleUrls: ['./http-service-posts.component.css']
})
export class HttpServicePostsComponent implements OnInit  {
  posts:any=[];
  constructor(private service:PostsServiceModified) 
  { 

  }

  /*

  All methods of http class will return observables we need to subscribe to the method to get the data. 

  */
 /*

 we perfomred sepration of concern   we moved the dependecny to service so that serive will communicate with the backend
 to get and update the required data.
 
 Later point if we need to change any url or way we get data, we just need to change it in once place.

 */
  createPost(post:HTMLInputElement)
  {

    this.service.create(post)
    .subscribe(response=>{
      let new_id:any=response
      this.posts.splice(0,0,{id:new_id.id,title:post.value})
      post.value=''
      console.log(response);
    },(errors:AppError)=>{
      if(errors instanceof badRequest)
          alert('Bad Request Error.');
      else
      throw errors;
    })
  }

  updatePost(post:{userId?:string,id?:string,title:string,body?:string})
  {

    this.service.update(post)
    .subscribe(response=>{
      console.log(response);
    },(errors:AppError)=>{
      alert('unExpected Error.');
      console.log("Logging error"); 
    })
    //this.http.put(this.url+'/'+post.id,JSON.stringify({isRead:true}))

  }

  deletePost(post:HTMLInputElement) 
  {
    this.service.delete(post).
    subscribe(response=>{
      let index=this.posts.indexOf(post)
        this.posts.splice(index,1);
    },(errors:AppError)=>{
      if(errors instanceof NotFoundError)
      {
        alert("This Post is Already deleted by other users.")
      }
      else
        throw errors;
    });
  }
 
  ngOnInit()
  {
    this.service.getAll()
    .subscribe(response=>{
      this.posts=response;
    },errors=>{
      alert('UnExpected Error Occured.');
      console.log("Logging error"); 
    });
  }

}
