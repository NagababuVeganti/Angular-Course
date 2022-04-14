import { Component, Inject, InjectionToken, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit {
  
  constructor(@Inject('MD_DIALOG_DATA') data:any) {

    console.log(data)
  }

  ngOnInit(): void {
  }

}
