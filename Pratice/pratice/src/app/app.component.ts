import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pratice';
  post={
    name:"New post",
    isLiked:false,
    numLiked:10
  }
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
}
