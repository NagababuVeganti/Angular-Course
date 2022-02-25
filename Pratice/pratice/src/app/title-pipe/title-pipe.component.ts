import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-pipe',
  templateUrl: './title-pipe.component.html',
  styleUrls: ['./title-pipe.component.css']
})
export class TitlePipeComponent implements OnInit {

  text1="";
  updateText()
  {
    console.log("changin")
   this.text1="sdfsaf";
  }

  ngOnInit(): void {
  }

}
