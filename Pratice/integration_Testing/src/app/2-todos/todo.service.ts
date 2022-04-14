import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs'

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo:any) {
    return this.http.post('...', todo).pipe(map(r => r));
  }

  getTodos() { 
    return this.http.get('...')
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map(r => r)).toPromise();
  }

  delete(id:number) {
    return this.http.delete('...').pipe(map(r => r));
  }
}