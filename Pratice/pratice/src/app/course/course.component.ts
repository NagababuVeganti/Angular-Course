import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  index=4
  course1 =[
  {
    title:"DIS",
  },

  {
    title:"QMB",
  },
  {
    title:"Data bases",
  }
]
OnAdd()
{
this.course1.push({title:"course"+this.index});
this.index+=1;
}

OnRemove(course: { title: string; })
{
let index=this.course1.indexOf(course);
this.course1.splice(index,1);
}

  ngOnInit(): void {
  }

}
