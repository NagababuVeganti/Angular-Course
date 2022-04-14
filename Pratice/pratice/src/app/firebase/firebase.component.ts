import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit,OnDestroy {
  items:any;
  items_1;
  subscription:Subscription;
  constructor(private firestore:AngularFireDatabase)
   {
     this.subscription=this.firestore.list('Course').valueChanges().subscribe(res=>{
       this.items=res
      console.log(res)
      })
      this.items_1=this.firestore.list('Course');

  }
  Upload(data:HTMLInputElement)
  {
    console.log("fdf")
    this.items_1.push(data.value);
    data.value=""

  }

  ngOnInit(): void {
  }

  ngOnDestroy()
  { 
    //Unsubscribe the subscription
    this.subscription.unsubscribe();
  }

}
