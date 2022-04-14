
import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Observable, of ,from, empty} from 'rxjs';
import { servicesVersion } from 'typescript';

/*
Spy methods are used to keep a track on functions and we can also modify the 
implementatio of functions 
*/

describe('TodosComponent_Test', () => {

  let component: TodosComponent;
  let service:TodoService;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
     service = new TodoService(spy);
  });

  it('Should set tods property with the items returned from ', () => {
   
    spyOn(service,'getTodos').and.callFake(()=>{
      return  from([ [1,2,3] ])
    });

    component.ngOnInit();
    expect(component.todos.length).toBe(3);

  });

it('Should call the server to save the changes',()=>{

  let spy = spyOn(service,'add').and.callFake((d:any) =>{ 
      return  empty();
  })
  component.add();
  //TO Test id that function is called. 
  expect(spy).toHaveBeenCalled();
});


  it('Should add todo ot items',()=>{
    let todo={id:1}
    let spy1 = spyOn(service,'add').and.callFake((d:any) =>{ 
  
        return  from([todo])
    });
    component.add()
    expect(component.todos.indexof(todo)).toBeGreaterThan(0)
    })


});