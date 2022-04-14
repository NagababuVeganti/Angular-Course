import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-hub-profile-component',
  templateUrl: './git-hub-profile-component.component.html',
  styleUrls: ['./git-hub-profile-component.component.css']
})
export class GitHubProfileComponentComponent implements OnInit {

  constructor(private route :ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{

        console.log(params);
    });
  }

}
