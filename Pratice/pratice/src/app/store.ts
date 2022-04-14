import { act } from "@ngrx/effects";
import { Action } from "@ngrx/store";
//Redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { state } from "@angular/animations";
import { totalmem } from "os";
import { createFeatureSelector,createSelector } from '@ngrx/store';

export interface Todo
{

    tasks:string[],
    LastUpdated:Date
    totalCount:number

}

export const addTask = createAction(
    'addTask',
    props<{ taskName: string }>() 
     );
   
export const removeTask = createAction(
    'removeTask',
    props<{ taskName: string }>() 

  );

export const updateTaks = createAction(
    'updateTaks',
    props<{ taskName: string }>() 

  );

export const initialState:Todo=
{
    tasks:[],
    LastUpdated:new Date(),
    totalCount:0
}



/*

export function rootReducer(state:any="hello World",action:Action)
{
    console.log(action.type,state)

    switch(action.type) 
    {

        case 'SPANISH':
            return state='Hola Mundo'
        case 'FRENCH':
            return state='Bonjour le'
        default:
            return state
    }
     
}
*/


export const booksReducer = createReducer(
    initialState,
    on(addTask, (state, {taskName}) => ({
        ...state,
        tasks:[...state.tasks,taskName],
        LastUpdated:new Date(),
        totalCount:state.totalCount+1
    })),

    on(removeTask,(state,{taskName})=>({
        ...state,
        tasks:state.tasks.filter((id)=> id!=taskName)

    }))

);

export const getTasks = createFeatureSelector<Todo>("LastUpdated");
export const selectFeatureCount = createSelector(
    getTasks,
    (state: Todo ) => state.tasks
  );