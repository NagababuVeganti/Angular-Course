import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { PostsService } from './Services/posts.service';
import { getTasks, Todo } from './store';
import {select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask } from './store';
import { removeTask } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value=0

/*
  constructor(private serv:PostsService,public dialog: MatDialog)
  {
    
  }

  title = 'pratice';
  post={
    name:"New post",
    isLiked:false,
    numLiked:10
  }
  toppingList=["cheese","Meat","beaf"]
  BillingSection='Billing section';
  ShippingSection="ShippingSection";
  viewModel="Active";
  
  UpdateCount(flag:boolean)
  {
    flag?this.post.numLiked+=1:this.post.numLiked-=1
  }

  onFavoriteChange(flag1:boolean)
  {
    console.log("Chnaged the icon",flag1)
  }
  Onchange(event:any)
  {
    console.log(event)
  }

  openDialog()
  {
    this.dialog.open(EditCourseComponent,{})
  }
*/
messgae=[]
items:any
constructor(private store:Store<Todo>)
{

}

addTask(taskName:string)
{
  console.log("sdfsdf")
  this.store.dispatch(addTask({taskName}));
  this.store.select('tasks').subscribe(res=> console.log(res))
}
spanishMessage()
{
  this.store.dispatch({type:'SPANISH'})
}

frenchMessage()
{
  this.store.dispatch({type:'FRENCH'})

}

}
