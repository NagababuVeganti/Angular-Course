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

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    BookmarkHearComponent,
    TitlePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
