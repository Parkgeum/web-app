import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  information: proin;
  
  readonly baseUrls = 'http://localhost:3000/member/findbyusername';

  constructor(private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userInform();
  }


  userInform() {
    let httpParams = new HttpParams()
      .append("username", localStorage.getItem('username'))


    this.http.post(this.baseUrls, httpParams).subscribe((res: any) => {
      this.information = res.data;
    });
  }

  onEdit(user: proin){
    this.information = user;
    localStorage.setItem('users', this.information.id);
    if(this.information.jsonWebToken == localStorage.getItem('token'))
    {
      this.router.navigate(['/profile']);
    }
    else if(this.information.jsonWebToken != localStorage.getItem('token'))
    {
      this.router.navigate(['/other']);
    }

    // local
  }

}

interface proin {
  _id: string;
  id: string;
  username: string;
  email: string;
  password: string;
  following: string[];
  follower: string[];
  posts: string[];
  image: string;
  jsonWebToken: string;
}
