import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bookmark-hear',
  templateUrl: './bookmark-hear.component.html',
  styleUrls: ['./bookmark-hear.component.css']
})
export class BookmarkHearComponent implements OnInit {
  @Input() flag:boolean=false;
  @Output() change= new EventEmitter();
  onClick()
  {
    this.flag=!this.flag
    this.change.emit(this.flag);
    // we can also pass objects also in emit function.
    //this.change.emit({newValue:this.flag})

  }
  getClass()
  {
    return this.flag? "bi bi-bookmark-heart-fill" : "bi bi-bookmark-heart"
  }

  ngOnInit(): void {
  }

}
