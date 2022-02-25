import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  isActive=true;
  constructor(service:AuthorsService) 
  {    
    this.authors=service.getAuthors()
  }
  onSave()
  {
    window.prompt("Button clicke");
  }
  ngOnInit(): void {
  }

}
