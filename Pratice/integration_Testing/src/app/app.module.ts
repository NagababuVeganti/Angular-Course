import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';
import {HomeComponent} from './home/home.component'
import {TodosComponent} from "./2-todos/todos.component"
import { UsersComponent } from './users/users.component';
import {TodoService} from './2-todos/todo.service'
@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    HomeComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
