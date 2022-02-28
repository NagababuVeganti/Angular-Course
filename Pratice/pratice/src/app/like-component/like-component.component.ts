import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent implements OnInit {

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
