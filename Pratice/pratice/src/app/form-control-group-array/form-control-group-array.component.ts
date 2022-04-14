import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-group-array',
  templateUrl: './form-control-group-array.component.html',
  styleUrls: ['./form-control-group-array.component.css']
})
export class FormControlGroupArrayComponent implements OnInit {

  formbuilder;
  constructor(fb:FormBuilder) 
  {
    this.formbuilder=fb.group({
      name:['',Validators.required],
      contact:fb.group({
        email:['',Validators.required],
        address:['',Validators.required],
        phone:['',Validators.required]
      }),
      topics:fb.array([])
    })
  }

  /* 
  The below form can be Constructed using Form builder like shown in the Constructor, simplified approch.
  */
  form= new FormGroup({

    name: new FormControl('',Validators.required),
    contact: new FormGroup({

        email: new FormControl(),
        address: new FormControl(),
        phone: new FormControl()
    }),
    topics: new FormArray([])
  });
  
  getControls() {
    return (this.formbuilder.get('topics') as FormArray).controls;
  }

  ngOnInit(): void {
  }

}
