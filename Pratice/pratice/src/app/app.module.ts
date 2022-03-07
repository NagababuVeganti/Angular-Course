import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.componnet';
import { CourseComponent } from './course/course.component';
import { servicesVersion } from 'typescript';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { BookmarkHearComponent } from './bookmark-hear/bookmark-hear.component';
import { TitlePipeComponent } from './title-pipe/title-pipe.component';
import { FormsModule } from '@angular/forms';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponentComponent } from './like-component/like-component.component';
import { LikeComponent1Component } from './like-component1/like-component1.component';
import { InputForamtDirective } from './input-foramt.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormExerciseComponent } from './form-exercise/form-exercise.component';
import {SignupFormComponent} from './signup-form/signup-form.component'
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
import { FormControlGroupArrayComponent } from './form-control-group-array/form-control-group-array.component';
import { FormChangePasswordComponent } from './form-change-password/form-change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    BookmarkHearComponent,
    TitlePipeComponent,
    BootstrapPanelComponent,
    LikeComponentComponent,
    LikeComponent1Component,
    InputForamtDirective,
    ZippyComponent,
    ContactFormComponent,
    FormExerciseComponent,
    SignupFormComponent,
    FormControlGroupArrayComponent,
    FormChangePasswordComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
