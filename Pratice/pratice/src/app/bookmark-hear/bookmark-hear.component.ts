import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-hear',
  templateUrl: './bookmark-hear.component.html',
  styleUrls: ['./bookmark-hear.component.css']
})
export class BookmarkHearComponent implements OnInit {
  flag=false
  onClick()
  {
    this.flag=!this.flag
  }
  getClass()
  {
    return this.flag? "bi bi-bookmark-heart-fill" : "bi bi-bookmark-heart"
  }

  ngOnInit(): void {
  }

}
