import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-component',
  templateUrl: './archive-component.component.html',
  styleUrls: ['./archive-component.component.css']
})
export class ArchiveComponentComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }
  year:string="";
  month:string='';

  Redirect()
  {
    
    this.route.navigate(['/']);
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe(parms=>{
      this.year=(parms.get('year')) as string;
      this.month=(parms.get('month')) as string;
    })
  }

}
