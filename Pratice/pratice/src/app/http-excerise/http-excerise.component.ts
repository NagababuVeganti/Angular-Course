import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gitHubFollowersService } from '../Services/githubfollowers.service';
import { Observable,combineLatest } from 'rxjs';
@Component({
  selector: 'app-http-excerise',
  templateUrl: './http-excerise.component.html',
  styleUrls: ['./http-excerise.component.css']
})
export class HttpExceriseComponent implements OnInit {
  followers:any=[]
  constructor( private route: ActivatedRoute,
    private service:gitHubFollowersService) { }

  
  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).
    subscribe(combined=>{
      let id=combined[0].get('id');
      let page=combined[1].get('page');

      this.service.getFollowers()
          .subscribe(response=>{
                     this.followers=response
          })
    })
    
  }

}

