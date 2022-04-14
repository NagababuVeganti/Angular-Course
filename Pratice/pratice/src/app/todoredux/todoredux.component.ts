import { Component, OnInit } from '@angular/core';
import { act } from "@ngrx/effects";
import { Action } from "@ngrx/store";
//Redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todoredux',
  templateUrl: './todoredux.component.html',
  styleUrls: ['./todoredux.component.css']
})
export class TodoreduxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
