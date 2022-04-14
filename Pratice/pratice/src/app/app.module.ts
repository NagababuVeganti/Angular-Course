import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.componnet';
import { CourseComponent } from './course/course.component';
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
import { HttpServicePostsComponent } from './http-service-posts/http-service-posts.component';
import { PostsService } from './Services/posts.service';
import { PostsServiceModified } from './Services/posts.modified';
import { AppError } from './common/app.error';
import {globalErrorHandler} from './common/app-global.erros';
import {gitHubFollowersService} from './Services/githubfollowers.service';
import { HttpExceriseComponent } from './http-excerise/http-excerise.component'
import {NavbarComponent} from './navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component'
import { RouterModule } from '@angular/router';
import { GitHubProfileComponentComponent } from './git-hub-profile-component/git-hub-profile-component.component';
import { GitProfileComponentComponent } from './git-profile-component/git-profile-component.component';
import { RouterExerciseComponent } from './router-exercise/router-exercise.component';
import { ArchiveComponentComponent } from './archive-component/archive-component.component';
import { environment } from 'src/environments/environment';
// Firebase modules
import { FirebaseComponent } from './firebase/firebase.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { getTokenSourceMapRange } from 'typescript';
// End here//
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodosComponent} from './todos/todos.component';
import { MdComponentsModule } from './md-components/md-components.module';

//Angular Material Modules
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DataService } from './Services/data.service';

//Redux 
import { StoreModule } from '@ngrx/store';
import {createStore} from 'redux';
import { booksReducer } from './store';
import ngRedux from 'ng-redux';
import { TodosReduxComponent } from './todos-redux/todos-redux.component';
import { TodoreduxComponent } from './todoredux/todoredux.component';
import {Todo} from './store'


//const appstore= createStore(rootReducer);

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
    FormChangePasswordComponent,
    HttpServicePostsComponent,
    HttpExceriseComponent,
    NavbarComponent,
    HomeComponentComponent,
    NotFoundComponentComponent,
    GitProfileComponentComponent,
    RouterExerciseComponent,
    ArchiveComponentComponent,
    FirebaseComponent,
    TodosComponent,
    EditCourseComponent,
    TodosReduxComponent,
    TodoreduxComponent
    ],
  
  imports: [
    StoreModule.forRoot({collection:booksReducer}),
    MdComponentsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot([
      {
        path:'',
        component:NavbarComponent
      },
      {
        path:'follower/:username',
        component:GitHubProfileComponentComponent
      },
      {
        path:'follower',
        component:HttpExceriseComponent
      },
      {
        path:'post',
        component:HttpServicePostsComponent
      },
      {
        path:'**',
        component:NotFoundComponentComponent
      }
    ]),
    RouterModule.forRoot([
      {
          path:'',
          component:RouterExerciseComponent
      },
      {
          path:'archive/:year/:month',
          component:ArchiveComponentComponent
      },
      {
        path:"**",
        component:NotFoundComponentComponent
      }
    ])

  ],
  providers: [DataService, CoursesService,AuthorsService,PostsService,PostsServiceModified,gitHubFollowersService,{ provide: ErrorHandler, useClass: globalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
