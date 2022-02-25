import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course1 =[
  {
    title:"DIS",
    price:2794,
    professor:"Manish Agarwal skdfkjd sdkfjksd sakdfkajdfjdfjsfkj salfdjilieriety cnc  skdjafkadjfjafdgndnvvadn;arioo JJDM,VSZDJFHKARLANSCN",
    releaseDate:new Date()
  },

  {
    title:"QMB",
    price:2652,
    professor:"Clinton",
    releaseDate:new Date()
  },
  {
    title:"Data bases",
    price:200,
    professor:"Bernt",
    releaseDate:new Date()
  }


]

  ngOnInit(): void {
  }

}
