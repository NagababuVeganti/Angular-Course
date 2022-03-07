import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form= new FormGroup({
    username: new FormControl('',
    [Validators.required,Validators.minLength(3),UsernameValidator.cannotContainSpace],
    UsernameValidator.isUsernameUnique),
    password: new FormControl('',Validators.required)
  });
/*
Nested form groups
*/

formgroups=new FormGroup(
  {
    account: new FormGroup({
      username: new FormControl("",[Validators.required,Validators.minLength(3),UsernameValidator.cannotContainSpace],
      UsernameValidator.isUsernameUnique),
      password: new FormControl('',Validators.required)
    }),

    shipping: new FormGroup({
      address: new FormControl(),
      zip: new FormControl()
    })
  });
  

  Login()
  {
    this.form.setErrors({
      invalid:true 
    });
  }
}
