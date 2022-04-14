import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DataService } from '../Services/data.service';
import {MatDialogModule} from '@angular/material/dialog';
import { EditCourseComponent } from '../edit-course/edit-course.component'



@NgModule({
 exports:[
  MatDialogModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSelectModule,
  MatInputModule,
 ]

})
export class MdComponentsModule { }
