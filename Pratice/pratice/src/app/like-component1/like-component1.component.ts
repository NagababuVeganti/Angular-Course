import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-component1',
  templateUrl: './like-component1.component.html',
  styleUrls: ['./like-component1.component.css']
})
export class LikeComponent1Component implements OnInit {

  @Input() isLiked=false;
  @Input() numLiked=0;
  @Output() notify=new EventEmitter()

  onClick()
  {
    this.isLiked=!this.isLiked 
    this.notify.emit(this.isLiked)
  }

  ngOnInit(): void {
  }

}
