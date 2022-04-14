import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-exercise',
  templateUrl: './router-exercise.component.html',
  styleUrls: ['./router-exercise.component.css']
})
export class RouterExerciseComponent implements OnInit {

  items=[{year:2017,month:1},{year:2017,month:2},{year:2017,month:3}]
  constructor(private route:ActivatedRoute, private router: Router) 
  { }

  ngOnInit(): void {
  }

}
