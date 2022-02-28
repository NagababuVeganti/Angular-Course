import { Component, Input, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  @Input('isOpenFalg') isOpenFalg=false;
  @Input('sectionType') sectionType1="sdf";
  changeFalg()
  {
    this.isOpenFalg=!this.isOpenFalg
  }
  ngOnInit(): void {
  }

}
