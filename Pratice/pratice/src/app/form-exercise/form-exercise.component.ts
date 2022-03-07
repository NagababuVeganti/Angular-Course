import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css']
})
export class FormExerciseComponent implements OnInit {

  constructor() { }
  Categories=[
    {
      id:"1",
      name:"Development"
    },
    {
      id:"2",
      name:"Art"
    },
    {
      id:"3",
      name:"Languages"

    }
  ]
  log(f:NgModel)
  {
    console.log(f)
  }
  submit(f:NgForm)
  {
    console.log(f);
  }
  ngOnInit(): void {
  }

}
