import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../shared/user.service'

import { Router, ActivatedRoute } from "@angular/router"


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  // providers: [ UserService ]

})
export class UserprofileComponent implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  Searchbtn(){
    this.router.navigateByUrl('/googlemap');
  }

}
