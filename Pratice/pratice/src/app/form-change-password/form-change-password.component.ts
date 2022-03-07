import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './passwords.validators';

@Component({
  selector: 'app-form-change-password',
  templateUrl: './form-change-password.component.html',
  styleUrls: ['./form-change-password.component.css']
})
export class FormChangePasswordComponent implements OnInit {

  oldpass='';
  constructor() { 
    
  }
  form=new FormGroup({
    oldPassword:new FormControl('',[Validators.required,PasswordValidator.checkOldPassword]),
    newPassword: new FormControl('',[Validators.required],PasswordValidator.checkNewPassword),
    confirmPassword: new FormControl('',[Validators.required])
  })
  storePassword(oldpass1:string)
  {
      this.oldpass=oldpass1;
  }
  check(oldpass:string)
  {
    
  }
  
  ValidateForm()
  {
    console.log(this.form.value)
    let values=this.form.value;
    if (values.newPassword!=values.confirmPassword)
    {
      this.form.setErrors({
        passwordsDidNotMatch:true
      });
    }

  }
  ngOnInit(): void {
  }

}
