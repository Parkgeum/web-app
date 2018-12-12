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



  // userInfo() {

  //   let httpParams = new HttpParams()
  //     .append("username", localStorage.getItem('username'))
  //     console.log(httpParams);

  //   this.http.post('http://localhost:3000/boards/search/user', httpParams).subscribe((res: any) => {
  //    this.information = res;
  //   });
  // }

  // getUserList() {
  //   return this.http.get(this.baseUrls);
  // }

  // refreshUserList() {
  //   this.getUserList().subscribe((res) => {
  //     this.information = res as proin;
  //     // console.log("refresh"+this.user.indexOf);  
  //   });
  // }

  userInform() {
    let httpParams = new HttpParams()
      .append("username", localStorage.getItem('username'))

      console.log(httpParams);

    this.http.post(this.baseUrls, httpParams).subscribe((res: any) => {
      this.information = res.data;
      console.log(JSON.stringify(this.information));
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
