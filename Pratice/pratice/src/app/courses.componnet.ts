import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component(
    {
        selector:'course',
        template: `
                    <h1> {{title}}</h1>
                    <ul>
                    <li *ngFor="let course1 of courses">{{course1}}</li>
                    </ul>
                `
    }
)
export class CoursesComponent
{
    title="List of Courses";
    courses;    
    constructor(service:CoursesService)
    {
        //let courses=new CoursesService() --> this new initialization also tighly couples the compoent , we can use the serive option
        // to let the constructor know about the dependency that is required.(Dependency injection)
        
        this.courses=service.getCourses();
    }
    //courses=['DIS','QMB',"DSP","Big Data"]
    /*services

    //Logic for Http service  { its not  recommend to implemet in the component}
    no tight coupling

    its recomended to implement the above logic in SERVICES.

    */

}