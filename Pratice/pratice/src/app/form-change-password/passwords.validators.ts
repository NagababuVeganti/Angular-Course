import { AbstractControl,  ValidationErrors } from "@angular/forms";
import {FormChangePasswordComponent} from './form-change-password.component'
export class PasswordValidator
{
    static checkOldPassword(control:AbstractControl): ValidationErrors | null
    {
        if((control.value as string)!= "123")
            return { 'matched':true };
        return null;
    }   



    static checkNewPassword(control:AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                if(control.value=="123")
                        resolve({oldPasswordMatched:true})
                else
                        resolve(null);
            },1000);
        });
    }
}