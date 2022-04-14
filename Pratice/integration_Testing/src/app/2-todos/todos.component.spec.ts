/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import {TodoService} from './todo.service'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable,from} from 'rxjs';
//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      providers:[TodoService,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the todos from the server',()=>{

    //One Way to get service, this only returns dependencies that are 
    // registered on module level.

    let service=TestBed.get(TodoService);

    spyOn(service,'getTodos').and.returnValue(from([1,2]));
    expect(component.todos.length).toBe(2);
  })
});
