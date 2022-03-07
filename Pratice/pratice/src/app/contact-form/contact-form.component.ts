import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  contactMethods=["Home","Office","Other"]
  log(x:NgModel)
  {
console.log(x);
  }
  ngOnInit(): void {
  }

  submit(f:NgForm)
  {
    console.log(f);
  }

}
